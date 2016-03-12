# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
moment = require('moment')

docpadConfig = {
	outPath: 'public'  # default

	templateData:
		# Site Data
		site:
			url: "http://vinaas.vn"
			title: "Công ty công nghệ tiên tiến Vinaas"
			author: "Desmond"
			description: "To make something special you just have to believe it's special!"
			email: "vinaas@gmail.com"
			favicon: "/img/favicon.png"
			logo: "/img/favicon.png"
			cover: "/img/favicon.png"
			navigation: [
        {
          name: 'Trang chủ',
          href: '/',
          section: 'home', sub: 'Giới thiệu Vinaas'
        },
        {
          name: 'Sản phẩm',
          href: '/sanpham.html',
          section: 'product',sub: 'Đã thực hiện'
        },
        {
          name: 'Dịch vụ',
          href: '/dichvu.html',
          section: 'service', sub: 'Cho khách hàng'
        },
        {
          name: 'Về chúng tôi',
          href: '/vechungtoi.html',
          section: 'about', sub: 'We are family'
        },
        {
          name: 'Bài viết',
          href: '/baiviet.html',
          section: 'blog', sub: 'Chia sẽ kiến thức'
        },
        {
          name: 'Liên hệ',
          href: '/lienhe.html',
          section: 'lienhe', sub: 'Lets coffee'
        }
      ]

		getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title
		getDescription: -> if @document.description then "#{@document.description} | #{@site.description}" else @site.description
		bodyClass: -> if @document.isPaged then "small" else "big"
		currentYear: -> new Date().getFullYear()
		isCurrent: (l) ->
      if @document.section is l.section  then ' current-menu-item'
      else if @document.url is l.href then ' current-menu-item'
      else ''
		time : (ts, format) ->
			format = format || 'DO MMMM , YYYY'
			ts = new Date(ts) || new Date()
			moment(ts).format(format)
	collections:
      products: ->
          @getCollection("html").findAllLive({isPost:true}, {postDate: -1})

	 # Environments
  # Allows us to set custom configuration for specific environments
  environments:  # default
			development:  # default
				hostname:  'localhost'
				port: 3000  # example
			production:
				hostname:  'vinaas.com'
				port: 8080  # example
	# port:2000
}

# Export the DocPad Configuration
module.exports = docpadConfig
