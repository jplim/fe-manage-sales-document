sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/rizing/ddc/managesalesdocument/test/integration/FirstJourney',
		'com/rizing/ddc/managesalesdocument/test/integration/pages/SalesDocumentList',
		'com/rizing/ddc/managesalesdocument/test/integration/pages/SalesDocumentObjectPage',
		'com/rizing/ddc/managesalesdocument/test/integration/pages/SalesDocumentItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesDocumentList, SalesDocumentObjectPage, SalesDocumentItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/rizing/ddc/managesalesdocument') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesDocumentList: SalesDocumentList,
					onTheSalesDocumentObjectPage: SalesDocumentObjectPage,
					onTheSalesDocumentItemObjectPage: SalesDocumentItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);