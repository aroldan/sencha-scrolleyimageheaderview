Ext.define 'Ext.ux.ImageHeaderScrollerView',
    extend: 'Ext.Container'
    xtype: 'imageheaderscroller'

    config:
        layout: 'fit'
        topContentSize: 115
        gradientStart: 60
        scrollable: true

    initialize: ->
        @callParent()

        @addCls('x-image-header-scroller')

        @headerView = @createHeaderView()
        @contentView = @createContentView()

        @add @headerView
        @add @contentView

        scroller = @getScrollable().getScroller()
        scroller.on 'scroll', @onScroll, @

        window.cx = @

    onScroll: (scroller, x, y) ->
        #console.log "Scrolled to #{x}, #{y}"
        topContentSize = @config.topContentSize

        pct = 100 + (y / @headerView.getSize().height) * 50;

        baseHeaderStyleStr = "margin-top:-#{2*topContentSize}px;"
        backgroundStyleStr = "background-position:50% #{pct}%;"

        styleStr = baseHeaderStyleStr + backgroundStyleStr

        @headerView.setStyle(baseHeaderStyleStr + backgroundStyleStr)

    createContentView: ->
        topContentSize = @config.topContentSize
        gradientStart = @config.gradientStart

        contentView = Ext.create 'Ext.Container', Ext.merge {},
            layout: 'vbox'
            scrollable: false
            style: """
            margin-top: #{topContentSize-gradientStart}px;
            padding-top: #{gradientStart}px;
            background-image: -webkit-linear-gradient(top, rgba(239, 239, 239, 0) 0px, rgba(239, 239, 239,1) #{gradientStart}px);
            """
            items: @config.contentItems


        contentView.addCls 'x-contentview'
        return contentView

    createHeaderView: ->
        topContentSize = @config.topContentSize

        headerView = Ext.create 'Ext.Container', Ext.merge {},
            height: topContentSize * 3
            style: "margin-top:-#{2*topContentSize}px"
            scrollable: false
        ,
            @config.header

        headerView.addCls 'x-headerview'
        return headerView

