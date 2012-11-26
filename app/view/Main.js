Ext.define('imageheaderscroller.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.ux.ImageHeaderScrollerView',
        'Ext.dataview.List'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Plain content',
                xtype: 'imageheaderscroller',
                iconCls: 'action',
                contentItems: [
                    {
                        html: "<h1>Main content</h1><p>Here's some plain text content"
                    }
                ]
            },
            {
                title: 'List View',
                xtype: 'imageheaderscroller',
                iconCls: 'action',
                contentItems: [
                    {
                        xtype: 'toolbar',
                        docked: 'top'
                    },
                    {
                        xtype: 'list',
                        scrollable: false,
                        height: 200,
                        itemTpl: '{title}',
                        data: [
                            { title: 'Item 1' },
                            { title: 'Item 2' },
                            { title: 'Item 3' },
                            { title: 'Item 4' }
                        ]
                    }
                ]
            }
        ]
    }
});
