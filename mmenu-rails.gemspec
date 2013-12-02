# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'version'

Gem::Specification.new do |spec|
  spec.name          = "mmenu-rails"
  spec.version       = MmenuRails::VERSION
  spec.authors       = ["Adrian Peterson Co"]
  spec.email         = ["adrianpco@gmail.com"]
  spec.description   = %q{This is a ruby gem for the asset pipeline which includes BeSite's jQuery.mmenu}
  spec.summary       = %q{A jQuery plugin that creates slick app look-alike sliding menus for your (mobile) website.}
  spec.homepage      = "http://mmenu.frebsite.nl"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
