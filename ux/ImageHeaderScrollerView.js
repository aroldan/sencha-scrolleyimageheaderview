(function() {

  Ext.define('Ext.ux.ImageHeaderScrollerView', {
    extend: 'Ext.Container',
    xtype: 'imageheaderscroller',
    config: {
      layout: 'fit',
      topContentSize: 115,
      scrollable: true
    },
    initialize: function() {
      var scroller;
      this.callParent();
      console.log(this.config);
      this.addCls('x-image-header-scroller');
      this.headerView = this.createHeaderView();
      this.contentView = this.createContentView();
      this.add(this.headerView);
      this.add(this.contentView);
      scroller = this.getScrollable().getScroller();
      scroller.on('scroll', this.onScroll, this);
      return window.cx = this;
    },
    onScroll: function(scroller, x, y) {
      var backgroundStyleStr, baseHeaderStyleStr, pct, styleStr, topContentSize;
      topContentSize = this.config.topContentSize;
      pct = 100 + (y / this.headerView.getSize().height) * 15;
      baseHeaderStyleStr = "margin-top:-" + (2 * topContentSize) + "px;";
      backgroundStyleStr = "background-position:50% " + pct + "%;";
      styleStr = baseHeaderStyleStr + backgroundStyleStr;
      return this.headerView.setStyle(baseHeaderStyleStr + backgroundStyleStr);
    },
    onMaxPositionChange: function(scroller, maxPosition, opts) {
      return console.log(maxPosition);
    },
    createContentView: function() {
      var contentView, topContentSize;
      topContentSize = this.config.topContentSize;
      return contentView = Ext.create('Ext.Container', Ext.merge({}, {
        items: this.config.contentItems,
        style: "margin-top: " + topContentSize + "px"
      }));
    },
    createHeaderView: function() {
      var headerView, topContentSize;
      topContentSize = this.config.topContentSize;
      headerView = Ext.create('Ext.Container', Ext.merge({}, {
        height: topContentSize * 3,
        style: "margin-top:-" + (2 * topContentSize) + "px"
      }, this.config.header));
      headerView.addCls('x-headerview');
      return headerView;
    }
  });

}).call(this);
