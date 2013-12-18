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

To cherry-pick what library/plugin you'll be using in mmenu-rails here is the list:

#### Javascript

  ```
  //= require mmenu-counters
  //= require mmenu-dragopen
  //= require mmenu-header
  //= require mmenu-labels
  //= require mmenu-searchfield
  ```

#### CSS

  ```
  *= require mmenu-counters
  *= require mmenu-dragopen
  *= require mmenu-header
  *= require mmenu-labels
  *= require mmenu-searchfield
  ```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

MIT. See [License] for more details.

[License]: http://github.com/akosipc/mmenu-rails/blob/master/LICENSE.txt
