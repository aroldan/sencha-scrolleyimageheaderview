Ext.define 'Ext.ux.ImageHeaderScrollerView',
    extend: 'Ext.Container'
    xtype: 'imageheaderscroller'

    config:
        layout: 'fit'
        topContentSize: 115
        scrollable: true

    initialize: ->
        @callParent()
        console.log @config

        @addCls('x-image-header-scroller')

        @headerView = @createHeaderView()
        @contentView = @createContentView()

        @add @headerView
        @add @contentView

        scroller = @getScrollable().getScroller()
        scroller.on 'scroll', @onScroll, @

        window.cx = @
        #console.log @getScroller()

    onScroll: (scroller, x, y) ->
        console.log "Scrolled to #{x}, #{y}"

    onMaxPositionChange: (scroller, maxPosition, opts) ->
        #console.log "max pos: #{maxPosition}"
        console.log maxPosition

    createContentView: ->
        topContentSize = @config.topContentSize

        contentView = Ext.create 'Ext.Container', Ext.merge {},
            items: @config.contentItems
            style: "margin-top: #{topContentSize}px"

    createHeaderView: ->
        topContentSize = @config.topContentSize

        headerView = Ext.create 'Ext.Container', Ext.merge {},
            height: topContentSize * 2
            style: "margin-top:-#{topContentSize}px"
        ,
            @config.header

        headerView.addCls 'x-headerview'
        return headerView

