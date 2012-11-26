(function() {

  Ext.define('Ext.ux.ImageHeaderScrollerView', {
    extend: 'Ext.Container',
    xtype: 'imageheaderscroller',
    config: {
      layout: 'fit',
      topContentSize: 115,
      gradientStart: 60,
      scrollable: true
    },
    initialize: function() {
      var scroller;
      this.callParent();
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
      pct = 100 + (y / this.headerView.getSize().height) * 50;
      baseHeaderStyleStr = "margin-top:-" + (2 * topContentSize) + "px;";
      backgroundStyleStr = "background-position:50% " + pct + "%;";
      styleStr = baseHeaderStyleStr + backgroundStyleStr;
      return this.headerView.setStyle(baseHeaderStyleStr + backgroundStyleStr);
    },
    createContentView: function() {
      var contentView, gradientStart, topContentSize;
      topContentSize = this.config.topContentSize;
      gradientStart = this.config.gradientStart;
      contentView = Ext.create('Ext.Container', Ext.merge({}, {
        layout: 'vbox',
        scrollable: false,
        style: "margin-top: " + (topContentSize - gradientStart) + "px;\npadding-top: " + gradientStart + "px;\nbackground-image: -webkit-linear-gradient(top, rgba(239, 239, 239, 0) 0px, rgba(239, 239, 239,1) " + gradientStart + "px);",
        items: this.config.contentItems
      }));
      contentView.addCls('x-contentview');
      return contentView;
    },
    createHeaderView: function() {
      var headerView, topContentSize;
      topContentSize = this.config.topContentSize;
      headerView = Ext.create('Ext.Container', Ext.merge({}, {
        height: topContentSize * 3,
        style: "margin-top:-" + (2 * topContentSize) + "px",
        scrollable: false
      }, this.config.header));
      headerView.addCls('x-headerview');
      return headerView;
    }
  });

}).call(this);
