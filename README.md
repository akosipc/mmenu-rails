[![Gem Version](https://badge.fury.io/rb/mmenu-rails.png)](http://badge.fury.io/rb/mmenu-rails)

# mmenu-rails

This is a ruby gem for the asset pipeline which includes [Besite's][besite] [jQuery.mmenu][library] library.

- [**Original library**][library]
- [**Demo**][demo]


[besite]: https://github.com/BeSite
[library]: https://github.com/BeSite/jQuery.mmenu
[demo]: http://mmenu.frebsite.nl/

## Installation

Add this line to your application's Gemfile:

    gem 'mmenu-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install mmenu-rails

Modify your `app/assets/javascripts/application.js`, adding:

  ```
  //= require mmenu
  ```

Modify your `app/assets/stylesheets/application.css`, adding:

  ```
  *= require mmenu
  ```

## Customization

Mmenu has various add-ons and extensions available. To use these in your project, simply include the relevant files in your Javascript and CSS manifests. 

#### Javascript

  ```
  //= require mmenu-buttonbars
  //= require mmenu-counters
  //= require mmenu-dragopen
  //= require mmenu-fixedelements
  //= require mmenu-footer
  //= require mmenu-header
  //= require mmenu-labels
  //= require mmenu-offcanvas
  //= require mmenu-searchfield
  //= require mmenu-toggles
  ```

#### CSS

  ```
  *= require mmenu-buttonbars
  *= require mmenu-counter
  *= require mmenu-dragopen
  *= require mmenu-footer
  *= require mmenu-header
  *= require mmenu-labels
  *= require mmenu-searchfield
  *= require mmenu-toggles

  *= require mmenu-effects
  *= require mmenu-fullscreen
  *= require mmenu-iconbar
  *= require mmenu-positioning
  *= require mmenu-themes
  *= require mmenu-widescreen
  ```

You can also include all add-ons and extensions (not recommended for production!) by using

  ```
  //= require mmenu-all
  ```

and

  ```
  *= require mmenu-all
  ```

in your application.js and application.css, respectively.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

MIT. See [License] for more details.

[License]: http://github.com/akosipc/mmenu-rails/blob/master/LICENSE.txt
