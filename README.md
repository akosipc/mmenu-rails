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
  //= require jquery.mmenu
  ```

Modify your `app/assets/stylesheets/application.css`, adding:

  ```
  *= require jquery.mmenu
  ```

## Customization

Mmenu has various add-ons and extensions available. To use these in your project, simply include the relevant files in your Javascript and CSS manifests.

#### Javascript

  ```
  //= require jquery.mmenu.autoheight
  //= require jquery.mmenu.backbutton
  //= require jquery.mmenu.buttonbars
  //= require jquery.mmenu.counters
  //= require jquery.mmenu.dividers
  //= require jquery.mmenu.dragopen
  //= require jquery.mmenu.fixedelements
  //= require jquery.mmenu.footer
  //= require jquery.mmenu.header
  //= require jquery.mmenu.oncanvas
  //= require jquery.mmenu.offcanvas
  //= require jquery.mmenu.searchfield
  //= require jquery.mmenu.sectionindexer
  //= require jquery.mmenu.toggles
  ```

#### CSS

  ```
  *= require jquery.mmenu.autoheight
  *= require jquery.mmenu.buttonbars
  *= require jquery.mmenu.counters
  *= require jquery.mmenu.dividers
  *= require jquery.mmenu.dragopen
  *= require jquery.mmenu.footer
  *= require jquery.mmenu.header
  *= require jquery.mmenu.height
  *= require jquery.mmenu.oncanvas
  *= require jquery.mmenu.offcanvas
  *= require jquery.mmenu.searchfield
  *= require jquery.mmenu.sectionindexer
  *= require jquery.mmenu.toggles

  *= require jquery.mmenu.borderstyle
  *= require jquery.mmenu.effects
  *= require jquery.mmenu.fullscreen
  *= require jquery.mmenu.iconbar
  *= require jquery.mmenu.multiline
  *= require jquery.mmenu.pageshadow
  *= require jquery.mmenu.positioning
  *= require jquery.mmenu.themes
  *= require jquery.mmenu.widescreen
  ```

You can also include all add-ons and extensions (not recommended for production!) by using

  ```
  //= require jquery.mmenu.all
  ```

and

  ```
  *= require jquery.mmenu.all
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
