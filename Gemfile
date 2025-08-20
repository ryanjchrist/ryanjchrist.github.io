source "https://rubygems.org"

gem "jekyll", "~> 4.3.4"
gem "csv", "~> 3.3"
gem "mutex_m"
gem "jekyll-remote-theme"


# Core Jekyll version
gem "jekyll", "~> 4.3.4"

# Remote theme support
gem "jekyll-remote-theme"

# Plugins
group :jekyll_plugins do
  gem "jekyll-paginate"       # For pagination
  gem "jekyll-sitemap"        # For sitemap.xml
  gem "jekyll-gist"           # Embed GitHub gists
  gem "jekyll-feed"           # For RSS feed
  gem "jemoji"                # Emoji support
  gem "jekyll-include-cache"  # Cache includes
  gem "jekyll-algolia"        # Search (if you’re using Algolia)
  gem "jekyll-seo-tag"        # SEO metadata
end

# Windows and JRuby fixes
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb gem to v0.6.x on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
