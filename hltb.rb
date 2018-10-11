#!/usr/bin/env ruby

require 'uri'
require 'net/http'
require 'net/https'
require 'nokogiri'

class HLTB
  URL = 'https://howlongtobeat.com/search_main.php?&page=1'.freeze

  def initialize(game)
    @game = game
	end

  def response
    @response ||= https.request post_request
  end

  private

  attr_reader :game

  def post_request
    Net::HTTP::Post.new(uri.path, headers).tap do |request|
      request.set_form_data form_data
    end
  end

  def https
    Net::HTTP.new(uri.host, uri.port).tap do |x|
      x.use_ssl = true
    end
  end

  def uri
    @uri ||= URI.parse URL
  end

  def headers
    {
      'Accept' => '*/*',
      #'Accept-Encoding' => 'gzip, deflate, br',
      'Content-Type' => 'application/x-www-form-urlencoded',
      'Origin' => 'https://howlongtobeat.com',
      'Referer' => 'https://howlongtobeat.com/',
      'User-Agent' => user_agent
    }
  end

  def user_agent
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'
  end

  def form_data
    {
      queryString: game,
      t: 'games',
      sorthead: 'popular',
      sortd: 'Normal Order',
      plat: nil,
      length_type: 'main',
      length_min: nil,
      length_max: nil,
      detail: nil
    }
  end
end

class Game
  attr_accessor :title, :path, :main, :extra, :complete, :average, :ps4, :vita

  def initialize
    @main, @extra, @complete, @average = [0.0] * 4
  end

  def title_symbol
    title
      .gsub(/[^a-zA-Z0-9]/, '')
      .gsub(/::/, '/')
      .gsub(/([A-Z]+)([A-Z][a-z])/,'\1_\2')
      .gsub(/([a-z\d])([A-Z])/,'\1_\2')
      .tr("-", "_")
      .downcase
  end

  def to_html
    %(<div class="col-md-4" id="#{title_symbol}">#{title}</div>)
  end

  def to_js
    attributes = [:main, :extra, :complete, :average].map { |attr| "\"#{attr}\": #{send(attr)}" }.join(", ")

    "\"#{title_symbol}\": {#{attributes}, \"systems\": [\"ps4\", \"vita\"]},"
  end

  def to_stdout
    lines = [title, path]
    %i(main extra complete average).each do |type|
      lines << ("#{type.to_s.capitalize}: #{send(type)} hours")
    end
    lines << ("\n")
    lines.join("\n")
  end
end

class GameLookup
  def initialize(game)
    @game = game
  end

  def valid?
    response.code.start_with? '2'
  end

  def matches
    return 0 unless valid?
    games.size
  end

  def details
    games.map { |d| extract d }
  end

  private

  attr_reader :game

  def extract(data)
    Game.new.tap { |g|
      g.path =  data.css('a').first.attributes['href'].value
      g.title = data.css('a').first.attributes['title'].value
      set_times(g, data)
    }
  end

  def times_section(data)
    return '.search_list_tidbit' if data.css('.search_list_tidbit').any?
    return '.search_list_tidbit_long' if data.css('.search_list_tidbit_long').any?
    nil
  end

  def set_times(g, data)
    return g unless times_section(data)

    time_section = data.css(times_section(data)).css('.center')

    %i(main extra complete average).each do |type|
      if time_section.any?
        g.send("#{type}=", sanitize(time_section.shift.children.text))
      end
    end
  end

  def sanitize(string)
    string.gsub('Hours', '').gsub('½','.5').strip.to_f.tap do |hours|
      hours = hours.round if hours.to_i == hours
    end
  end

  def response
    @response ||= HLTB.new(game).response
  end

  def games
    @games ||= page.css('.search_list_details')
  end

  def page
    return unless valid?
    @page ||= Nokogiri::HTML(response.body)
  end
end


def format_html(game, i)
  puts(game.to_html)
  puts(game.to_js)
  puts("------------")
end

def format_stdout(game, i)
  puts "#{i+1}: #{game.to_stdout}"
end

def lookup(title)
  GameLookup.new(title).details.each_with_index(&method(:format_html))
  #GameLookup.new(title).details.each_with_index(&method(:format_stdout))
end

GAMES = []

def main
  if ARGV.empty?
    GAMES.each do |game|
      lookup(game);
      puts("==========")
    end
  else
    ARGV.each do |game|
      lookup(game);
      puts("==========")
    end
  end
end

main()
