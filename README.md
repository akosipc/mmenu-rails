# Mmenu-Rails

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

  ```javascript
  //= require mmenu
  ```

Modify your `app/assets/stylesheets/application.css`, adding:

  ```css
  *= require mmenu
  ```:

## Customization

Currently, there are a few customizations based on the new version of mmenu.
I'll be adding them in the next release of mmenu-rails.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

MIT. See [License] for more details.

[License]: http://github.com/akosipc/mmenu-rails/blob/master/LICENSE.txt
