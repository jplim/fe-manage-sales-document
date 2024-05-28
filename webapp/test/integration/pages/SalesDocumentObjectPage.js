sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.rizing.ddc.managesalesdocument',
            componentId: 'SalesDocumentObjectPage',
            contextPath: '/SalesDocument'
        },
        CustomPageDefinitions
    );
});