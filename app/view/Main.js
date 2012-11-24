Ext.define('imageheaderscroller.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.ux.ImageHeaderScrollerView'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                xtype: 'imageheaderscroller',
                header: {
                    html: "Top content"
                },
                contentItems: [
                    {
                        html: "Main content"
                    }
                ]
            }
        ]
    }
});
