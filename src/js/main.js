/*! Project: purnima-advertising. Created by: ganeshkondalkar@gmail.com. Version: 1.0.0.
This project is valid for the duration: April 01st, 2019 - March 31st, 2022. */
(function($, window, undefined){

    var SiteRenewal = {
        notificationAPI: 'js/site_renewal_notification.php',
        startDate: '01st April 2021',
        endDate: '31st March 2022',
        // The date to renew.
        expiryDate: new Date(2022, 2, 31),
        isRenewalRequired: function(){
            if( SiteRenewal.expiryDate < new Date() ){
                return true;
            } else {
                return false;
            }
        },
        // notification message in details.
        getNotification: function(){
            var start = SiteRenewal.startDate,
                end = SiteRenewal.endDate,
                notice = (
                    'Hosting renewal is required!\n' +
                    'Your Website Hosting plan was only for the period of ( ' +
                    start + ' to ' + end + ' ).\n' +
                    'Please contact your host provider for re-activation!'
                );

            return notice;
        },
        // sends email to the client regarding Renewal Reminder.
        notify: function(){
            var message = 'message=' + SiteRenewal.getNotification();
            var payload = { data: message };
            $.post(SiteRenewal.notificationAPI, payload).done(function (response) {
                console.info(response);
            }).fail(function (responseError) {
                console.warn('ERROR: While submitting request.');
            });
        }
    };

    /**
        NOTE: responsive layout breakpoint
        to determine at which point the browser should trigger
        Mobile/Desktop Layout variations.
    */
    var LAYOUT_BREAKPOINT = 768;

    var GALLERY_DATA_MOBILE = [
        {title:"Nirma Advance - Karate Film",imgSrc:"nirma-advance-karate-film.jpg",videoSrc:"OHVvWi455uw"},
        {title:"Nirma Advance - Chef Film",imgSrc:"nirma-advance-chef-film.jpg",videoSrc:"EISuBzWt6AQ"},
        {title:"Nirma Advance - Artist Film",imgSrc:"nirma-advance-artist-film.jpg",videoSrc:"xsMMPXo4oMo"},
        {title:"Zee Family TV 62 Sec",imgSrc:"Zee-Family-TV-62-Sec.jpg",videoSrc:"dq8RP-kkXCw"},
        {title:"Visitors Coverage",imgSrc:"Visitors-Coverage.jpg",videoSrc:"1YUnL-MoVek"},
        {title:"Visitors coverage 30sec QCB",imgSrc:"Visitors-coverage-30sec-QCB.jpg",videoSrc:"6Fw8EyUTr7Y"},
        {title:"Royal Basmati Rice",imgSrc:"Royal-Basmati-Rice.jpg",videoSrc:"wDfYPRAuExE"},
        {title:"Remitly Car 30 Sec",imgSrc:"Remitly-Car-30-Sec.jpg",videoSrc:"P-sY2jacke0"},
        {title:"Nanak 65 Sec",imgSrc:"Nanak-65-Sec.jpg",videoSrc:"zAKzEKNG4qs"},
        {title:"Xoom Technology 30 Sec",imgSrc:"Xoom-Technology-30-Sec.jpg",videoSrc:"rjA3Lkso6AQ"},
        {title:"Xoom Speed 30 Sec x264 Segment",imgSrc:"Xoom-Speed-30-Sec-x264-Segment.jpg",videoSrc:"eWprI1IO_hk"},
        {title:"Laxmi Asli Mahek 60sec",imgSrc:"Laxmi-Asli-Mahek-60sec.jpg",videoSrc:"iHnL6llUdCk"},
        {title:"HOS Sharbatti Chapati Flour 60 sec",imgSrc:"HOS-Sharbatti-Chapati Flour-60-sec.jpg",videoSrc:"2zDfJfYBHtk"},
        {title:"HOS Maaza 35 Sec",imgSrc:"HOS-Maaza-35-Sec.jpg",videoSrc:"AWm_MbkAuYk"},
        {title:"HOS Bharosa 50 Sec",imgSrc:"HOS-Bharosa-50-Sec.jpg",videoSrc:"sQjj7rPLi-M"},
        {title:"HOS Ammas Kitchen Snacks 45 sec",imgSrc:"HOS-Ammas-Kitchen-Snacks-45-sec.jpg",videoSrc:"Gm8Fe-QrgEE"},
        {title:"HOS Ammas Frozen Snacks 35 Sec",imgSrc:"HOS-Ammas-Frozen-Snacks-35-Sec.jpg",videoSrc:"Qv8vHFtfQ6g"},
        {title:"Nirmax Cement Nirmax 60 Sec",imgSrc:"Nirmax-Cement-Nirmax-60-Sec.jpg",videoSrc:"HYqdivwnt4Q"},
        {title:"Kitchen Xpress 65 Sec Garam Masala",imgSrc:"Kitchen-Xpress-65-Sec-Garam-Masala.jpg",videoSrc:"43v30Bf_lXk"},
        {title:"Suruchi Goda Masala 50 Sec",imgSrc:"Suruchi-Classic-Goda-Masala-TVC-2018.jpg",videoSrc:"n6trwDzMA0k"},
        {title:"Nirma Sudha Namak 30 Sec",imgSrc:"Nirma-Sudha-Namak-30-Sec.jpg",videoSrc:"FGMXo9GqjJQ"},
        {title:"Nirma Sandal Thai New 45 Sec New Ad x264",imgSrc:"Nirma-Sandal-Thai-New-45-Sec-New-Ad-x264.jpg",videoSrc:"lqbupC7fC8Q"},
        {title:"Nirma Super Cake Paint Ball 45 Sec",imgSrc:"Nirma-Super-Cake-Paint-Ball-45-Sec.jpg",videoSrc:"5Tayu5mqH-c"},
        {title:"Nirma Super Cake 20 Sec",imgSrc:"Nirma-Super-Cake-20-Sec.jpg",videoSrc:"lQrTjCC-N0Q"},
        {title:"Nirma Washing Powder underwater 60 sec",imgSrc:"Nirma-Washing-Powder-underwater-60-sec.jpg",videoSrc:"9kchp2yEzbg"},
        {title:"Nirma Washing Powder Ambulance 40 Sec",imgSrc:"Nirma-Washing-Powder-Ambulance-40-Sec.jpg",videoSrc:"Q4HQot34bIo"},
        {title:"Nirma Washing Powder Sanjeeda Sheikh 40 Sec",imgSrc:"Nirma-Washing-Powder-Sanjeeda-Sheikh-40-Sec.jpg",videoSrc:"yuvQB177nww"},
        {title:"Nirma Washing Powder Older 60 sec",imgSrc:"Nirma-Washing-Powder-Older-60-sec.jpg",videoSrc:"JNLuQeh1BUY"},
        {title:"Nirma Washing Powder Old 60 Sec",imgSrc:"Nirma-Washing-Powder-Old-60-Sec.jpg",videoSrc:"ATZijK90QaU"},
        {title:"Nirma Advance Hens 35 Sec",imgSrc:"Nirma-Advance-Hens-35-Sec.jpg",videoSrc:"19BgTlE1_vs"},
        {title:"Nirma Advance Crab 35 Sec",imgSrc:"Nirma-Advance-Crab-35-Sec.jpg",videoSrc:"BIMh0HAfNnY"},
        {title:"Nirma Advance HR Aam Wrestling 30 Sec",imgSrc:"Nirma-Advance-HR-Aam-Wrestling-30-Sec.jpg",videoSrc:"GQ5fSnvlMLA"},
        {title:"Nirma Advance HR with 2 Boys 45 Sec",imgSrc:"Nirma-Advance-HR-with-2-Boys-45-Sec.jpg",videoSrc:"sUlhCNHz_bU"},
        {title:"Nirma Advance HR with Girl 45 Sec",imgSrc:"Nirma-Advance-HR-with-Girl-45-Sec.jpg",videoSrc:"AGR_ShNs0bs"},
        {title:"Nirma Advance HR with Boy",imgSrc:"Nirma-Advance-HR-with-Boy.jpg",videoSrc:"AGR_ShNs0bs"},
        {title:"Suruchi Classic Goda Masala TVC 2018",imgSrc:"Suruchi-Classic-Goda-Masala-TVC-2018.jpg",videoSrc:"Hbso0m3XBvg"},
        {title:"Nirma Advance TVC 30 SEC || 2017",imgSrc:"Nirma-Advance-TVC-30-SEC-__-2017.jpg",videoSrc:"8E_nRESFOY8"},
        {title:"Vithoba Ayurvedic Dantmanjan TVC (30SEC) II Hindi 2018",imgSrc:"Vithoba-Ayurvedic-Dantmanjan-TVC-(30SEC)-II-Hindi-2018.jpg",videoSrc:"T8nrBq7-bDs"}
    ];

    var GALLERY_DATA_DESKTOP = [
        [
            {title:"Nirma Advance - Karate Film",imgSrc:"nirma-advance-karate-film.jpg",videoSrc:"OHVvWi455uw"},
            {title:"Nirma Advance - Chef Film",imgSrc:"nirma-advance-chef-film.jpg",videoSrc:"EISuBzWt6AQ"},
            {title:"Nirma Advance - Artist Film",imgSrc:"nirma-advance-artist-film.jpg",videoSrc:"xsMMPXo4oMo"}
        ],
        [
            {title:"Zee Family TV 62 Sec",imgSrc:"Zee-Family-TV-62-Sec.jpg",videoSrc:"dq8RP-kkXCw"},
            {title:"Visitors Coverage",imgSrc:"Visitors-Coverage.jpg",videoSrc:"1YUnL-MoVek"},
            {title:"Visitors coverage 30sec QCB",imgSrc:"Visitors-coverage-30sec-QCB.jpg",videoSrc:"6Fw8EyUTr7Y"}
        ],
        [
            {title:"Royal Basmati Rice",imgSrc:"Royal-Basmati-Rice.jpg",videoSrc:"wDfYPRAuExE"},
            {title:"Remitly Car 30 Sec",imgSrc:'Remitly-Car-30-Sec.jpg',videoSrc:"P-sY2jacke0"},
            {title:"Nanak 65 Sec",imgSrc:"Nanak-65-Sec.jpg",videoSrc:"zAKzEKNG4qs"}
        ],
        [
            {title:"Xoom Technology 30 Sec",imgSrc:"Xoom-Technology-30-Sec.jpg",videoSrc:"rjA3Lkso6AQ"},
            {title:"Xoom Speed 30 Sec x264 Segment",imgSrc:"Xoom-Speed-30-Sec-x264-Segment.jpg",videoSrc:"eWprI1IO_hk"},
            {title:"Laxmi Asli Mahek 60sec",imgSrc:"Laxmi-Asli-Mahek-60sec.jpg",videoSrc:"iHnL6llUdCk"}
        ],
        [
            {title:"HOS Sharbatti Chapati Flour 60 sec",imgSrc:"HOS-Sharbatti-Chapati Flour-60-sec.jpg",videoSrc:"2zDfJfYBHtk"},
            {title:"HOS Maaza 35 Sec",imgSrc:"HOS-Maaza-35-Sec.jpg",videoSrc:"AWm_MbkAuYk"},
            {title:"HOS Bharosa 50 Sec",imgSrc:"HOS-Bharosa-50-Sec.jpg",videoSrc:"sQjj7rPLi-M"}
        ],
        [
            {title:"HOS Ammas Kitchen Snacks 45 sec",imgSrc:"HOS-Ammas-Kitchen-Snacks-45-sec.jpg",videoSrc:"Gm8Fe-QrgEE"},
            {title:"HOS Ammas Frozen Snacks 35 Sec",imgSrc:"HOS-Ammas-Frozen-Snacks-35-Sec.jpg",videoSrc:"Qv8vHFtfQ6g"},
            {title:"Nirmax Cement Nirmax 60 Sec",imgSrc:"Nirmax-Cement-Nirmax-60-Sec.jpg",videoSrc:"HYqdivwnt4Q"}
        ],
        [
            {title:"Kitchen Xpress 65 Sec Garam Masala",imgSrc:"Kitchen-Xpress-65-Sec-Garam-Masala.jpg",videoSrc:"43v30Bf_lXk"},
            {title:"Suruchi Goda Masala 50 Sec",imgSrc:"Suruchi-Classic-Goda-Masala-TVC-2018.jpg",videoSrc:"n6trwDzMA0k"},
            {title:"Nirma Sudha Namak 30 Sec",imgSrc:"Nirma-Sudha-Namak-30-Sec.jpg",videoSrc:"FGMXo9GqjJQ"}
        ],
        [
            {title:"Nirma Sandal Thai New 45 Sec New Ad x264",imgSrc:"Nirma-Sandal-Thai-New-45-Sec-New-Ad-x264.jpg",videoSrc:"lqbupC7fC8Q"},
            {title:"Nirma Super Cake Paint Ball 45 Sec",imgSrc:"Nirma-Super-Cake-Paint-Ball-45-Sec.jpg",videoSrc:"5Tayu5mqH-c"},
            {title:"Nirma Super Cake 20 Sec",imgSrc:"Nirma-Super-Cake-20-Sec.jpg",videoSrc:"lQrTjCC-N0Q"}
        ],
        [
            {title:"Nirma Washing Powder underwater 60 sec",imgSrc:"Nirma-Washing-Powder-underwater-60-sec.jpg",videoSrc:"9kchp2yEzbg"},
            {title:"Nirma Washing Powder Ambulance 40 Sec",imgSrc:"Nirma-Washing-Powder-Ambulance-40-Sec.jpg",videoSrc:"Q4HQot34bIo"},
            {title:"Nirma Washing Powder Sanjeeda Sheikh 40 Sec",imgSrc:"Nirma-Washing-Powder-Sanjeeda-Sheikh-40-Sec.jpg",videoSrc:"yuvQB177nww"}
        ],
        [
            {title:"Nirma Washing Powder Older 60 sec",imgSrc:"Nirma-Washing-Powder-Older-60-sec.jpg",videoSrc:"JNLuQeh1BUY"},
            {title:"Nirma Washing Powder Old 60 Sec",imgSrc:"Nirma-Washing-Powder-Old-60-Sec.jpg",videoSrc:"ATZijK90QaU"},
            {title:"Nirma Advance Hens 35 Sec",imgSrc:"Nirma-Advance-Hens-35-Sec.jpg",videoSrc:"19BgTlE1_vs"}
        ],
        [
            {title:"Nirma Advance Crab 35 Sec",imgSrc:"Nirma-Advance-Crab-35-Sec.jpg",videoSrc:"BIMh0HAfNnY"},
            {title:"Nirma Advance HR Aam Wrestling 30 Sec",imgSrc:"Nirma-Advance-HR-Aam-Wrestling-30-Sec.jpg",videoSrc:"GQ5fSnvlMLA"},
            {title:"Nirma Advance HR with 2 Boys 45 Sec",imgSrc:"Nirma-Advance-HR-with-2-Boys-45-Sec.jpg",videoSrc:"sUlhCNHz_bU"}
        ],
        [
            {title:"Nirma Advance HR with Girl 45 Sec",imgSrc:"Nirma-Advance-HR-with-Girl-45-Sec.jpg",videoSrc:"AGR_ShNs0bs"},
            {title:"Nirma Advance HR with Boy",imgSrc:"Nirma-Advance-HR-with-Boy.jpg",videoSrc:"AGR_ShNs0bs"},
            {title:"Suruchi Classic Goda Masala TVC 2018",imgSrc:"Suruchi-Classic-Goda-Masala-TVC-2018.jpg",videoSrc:"Hbso0m3XBvg"}
        ],
        [
            {title:"Nirma Advance TVC 30 SEC || 2017",imgSrc:"Nirma-Advance-TVC-30-SEC-__-2017.jpg",videoSrc:"8E_nRESFOY8"},
            {title:"Vithoba Ayurvedic Dantmanjan TVC (30SEC) II Hindi 2018",imgSrc:"Vithoba-Ayurvedic-Dantmanjan-TVC-(30SEC)-II-Hindi-2018.jpg",videoSrc:"T8nrBq7-bDs"}
        ]
    ];

    // when we scroll on page, to change the logo & nav, we need to set the timeout.
    var TIMEOUT_ID,
        // on window resize event.
        TIMEOUT_ID_RESIZE;
    // calculate the window's height/width
    var WINDOW_HEIGHT = 0;
    var WINDOW_WIDTH = 0;
    // current slide index
    var CURRENT_SLIDE_INDEX = 0;

    var SLIDEBARS_PLUGIN = new slidebars();

    var LOGO = {
        white: 'img/logo/logo-white.png',
        whiteGrey: 'img/logo/logo-white-grey.png',
        blueGrey: 'img/logo/logo-blue-grey.png'
    };

    /*
        NOTE: based on which type of layout is loaded,
        we need to run the application callbacks.
        this will trigger rest of the modules.
    */
    var LAYOUT = {
        DESKTOP: false,
        MOBILE: false,
        heroImageInserted: false
    }

    var DOM = {
        $window: $(window),
        $doc: $(document),
        $body: $('body'),
        $scrollingWindow: $('html, body'),
        $header: $('header'),
        $logo: $('#logo'),
        $contactCollapsible: $('#contact-collapsible'),
        $contactCarotIcon: $('.contact-header-link i'),
        $activePageTitle: $('.active-page'),
        $tabsComponent: $('.tabs-component'),
        $teamScrollerComponent: $('#team-scroller-component'),
        $servicesMediaServiceScrollerComponent: $('.scroling-content'),
        $homeSlider: $('#home-page-slider'),
        $homeMobileSlider: $('#home-page-mobile-slider'),
        $nonGovtSlider: $('#non-govt-carousel'),
        $govtSlider: $('#govt-carousel'),
        $gallerySlider: $('#gallery-carousel'),
        $pageSlider: $('#page-slider'), // TODO: Need to change this to pages. Instead of pageSlider.
        $navToggleBTN: $('.js-toggle-main-navbar'),
        // Video Modal window
        $videoModal: null,
        $videoModalCloseBTN: null,

        // animated scroll buttons (Up & Down arrows).
        $scrollUpBtn: $('#scroll-up-btn'),
        $scrollDownBtn: $('#scroll-down-btn'),

        $contactForm: $('#contact-form'),

        slides: {
            $homeBG: null,
            $aboutUsBG: null,
            $groupBG: null,
            $servicesBG: null,
            $clientsBG: null,
            $galleryBG: null,
            $teamBG: null,
            $contactBG: null
        },
        slidesArray: [
            '$homeBG','$aboutUsBG','$groupBG','$servicesBG',
            '$clientsBG','$galleryBG','$teamBG','$contactBG'
        ],
        heroImagesData: [
            {
                $el: '$aboutUsBG',
                imgSrc: 'bg_about_us.jpg',
                imgAltText: 'about us section image for mobile'
            },
            /*{
                $el: '$groupBG',
                imgSrc: 'bg_blank.jpg',
                imgAltText: 'blank image for space adjustment'
            },*/
            {
                $el: '$servicesBG',
                imgSrc: 'bg_services.jpg',
                imgAltText: 'Services section image for mobile'
            },
            {
                $el: '$teamBG',
                imgSrc: 'bg_team.jpg',
                imgAltText: 'Team section image for mobile'
            },
            {
                $el: '$contactBG',
                imgSrc: 'bg_contact_us.jpg',
                imgAltText: 'Contact section image for mobile'
            }
        ],
        homeSliderOptions: {
            autoplay: true, autoplayTimeout: 6200,
            autoplaySpeed: 1000,
            margin: 0, loop: true, nav: false, dots: true,
            responsive: {
                0: { items: 1 },
                1000: { items: 1 }
            }
        },
        homeSliderMobileOptions: {
            'fx': 'scrollVert',
            'reverse': true,
            'timeout': 3000,
            'carousel-visible': 1,
            // 'carousel-fluid': false,
            'carousel-slide-dimension': '100%',
            'carousel-vertical': true,
            'update-view': -1
        },
        nonGovtSliderOptions: {
            autoplay: true, autoplayTimeout: 2000, autoplaySpeed: 1000,
            margin: 0, loop: true, nav: true, dots: false,
            responsive: {
                // mobile, tablets
                0: { items: 3 },
                // tablet
                768: { items: 5 },
                // desktop
                1000: { items: 10 }
            }
        },
        gallerySliderOptions: {
            autoplay: true, autoplayTimeout: 2000, autoplaySpeed: 1000,
            margin: 0, loop: true, nav: true, dots: false,
            responsive: {
                // mobile, tablets
                0: { items: 2 },
                // desktop
                1000: { items: 7 }
            }
        }
    };

    /*
        1. taskID - ID generated by setTimeout.
        2. callback - callback function to be executed within setTimeout.
        3. timer - interval in miliseconds.
        4. return value - generated taskID is returned to avoid the multiple calls.
    */
    var AsyncTaskHandler = function(taskID, callback, timer){
        if( taskID !== undefined ){
            clearTimeout( taskID );
        }

        taskID = setTimeout(callback, timer);
        return taskID;
    }

    /*
        Dynamic Gallery HTML Generator module.
        1. Creates Govt & Non-Govt Slider HTML.
        2. Creates Gallery Slider HTML.
    */
    var DynamicSlider = {
        generateThumbnail: function(thumbnailData){
            var thumbTemplate;
            var imgSrc = 'img/gallery/' + thumbnailData.imgSrc;

            /*return ('<img class="img-fluid" src="' + imgSrc +
                '" alt="' + thumbnailData.title + '" data-video-src="' +
            thumbnailData.videoSrc + '">');*/

            if(LAYOUT.DESKTOP){
                thumbTemplate = ('<img class="img-fluid" src="' + imgSrc +
                '" alt="' + thumbnailData.title + '" data-video-src="' +
                thumbnailData.videoSrc + '">');
            } else if(LAYOUT.MOBILE){
                thumbTemplate = ('<div class="col-sm-6"><img class="img-fluid" src="' + imgSrc +
                '" alt="' + thumbnailData.title + '" data-video-src="' +
                thumbnailData.videoSrc + '"></div>');
            }
            return thumbTemplate;
        },
        generateSliderThumbnails: function(columnData){
            // no. of thumbnails contained in a column.
            var columnThumbnails = columnData.map(DynamicSlider.generateThumbnail);
            return columnThumbnails.join('');
        },
        generateSliderColumn: function(columnData){
            var columnThumbnails = DynamicSlider.generateSliderThumbnails(columnData);
            return '<div class="owl-item">' + columnThumbnails + '</div>';
        },
        generateSliderColumns: function(galleryData){
            var galleryColumns = galleryData.map( DynamicSlider.generateSliderColumn );
            var galleryLayout = (
                '<div class="owl-stage-outer">' +
                    '<div class="owl-stage">' + galleryColumns.join('') +
                '</div></div>'
            );
            return galleryLayout;
        },

        /*
            TODO: Based on Responsive width & height calculations.
        */
        generateSliderContent: function( data ){
            // var galleryHTML = DynamicSlider.generateSliderColumns( data );
            var galleryHTML = ( LAYOUT.DESKTOP ) ?
                DynamicSlider.generateSliderColumns(data) :
                DynamicSlider.generateSliderThumbnails(data);
            return galleryHTML;
        },

        buildContent: function( json ){
            var sliderContent = DynamicSlider.generateSliderContent( json );
            return sliderContent;
        }
    };

    // Video Gallery with Modal
    var VideoGalleryModule = {
        hideVideoModal: function(){
            DOM.$videoModal.addClass("d-none").data("media", "");
            DOM.$videoModal.find(".video-container").html("");
            DOM.$doc.off("keyup");
        },
        onEscapeForVideoClick: function(evt){
            if(evt.keyCode === 27){
                VideoGalleryModule.hideVideoModal();
            }
        },
        setVideoHTML: function(html){
            DOM.$videoModal.removeClass("d-none");
            DOM.$videoModal.attr("data-media", "video");
            DOM.$videoModal.find(".video-container").html(html);
            DOM.$doc.off("keyup").on("keyup", VideoGalleryModule.onEscapeForVideoClick);
            DOM.$videoModalCloseBTN.off("click").on("click", function (evt) {
                evt.preventDefault();
                VideoGalleryModule.hideVideoModal();
            })
        },
        buildVideoModal: function(videoSrc){
            var videoDir = "https://www.youtube.com/embed/",
                tmpl = '<iframe width="100%" height="100%" src="' + videoDir + videoSrc + '" frameborder="0" allowfullscreen></iframe>';
            VideoGalleryModule.setVideoHTML(tmpl);
        },
        onThumbnailClick: function(evt){
            var videoSrc = $(this).data('videoSrc');
            VideoGalleryModule.buildVideoModal(videoSrc);
        },
        bindEvents: function(){
            DOM.$gallerySlider.off('click').on('click', 'img', VideoGalleryModule.onThumbnailClick);
        },
        buildContent: function(){
            // build content for Desktop
            var galleryHTML = (LAYOUT.DESKTOP) ? DynamicSlider.buildContent( GALLERY_DATA_DESKTOP ) : DynamicSlider.buildContent( GALLERY_DATA_MOBILE );

            // DOM.$gallerySlider.find('.owl-stage').html( galleryHTML );
            DOM.$gallerySlider.html( galleryHTML );
        },
        cacheDOMElements: function(){
            DOM.$videoModal = $("#videoModal");
            DOM.$videoModalCloseBTN = DOM.$videoModal.find('#close-video-btn');
        },
        destroyCarousel: function(){
            // console.log('Destroy Desktop Video Gallery Carousel');
            DOM.$gallerySlider.trigger('destroy.owl.carousel');
        },
        init: function(){
            // To build the carousel fresh destroy an existing instance.
            VideoGalleryModule.destroyCarousel();
            // Generate Gallery grid HTML
            VideoGalleryModule.buildContent();
            // bind onclick listener
            VideoGalleryModule.bindEvents();
            // Video Gallery Modal window related DOM elements cached.
            VideoGalleryModule.cacheDOMElements();
            // only for desktop layout
            if( LAYOUT.DESKTOP ){
                console.log('Show Desktop Video Gallery Carousel');
                // instantiate carousel after HTML rendered.
                DOM.$gallerySlider.owlCarousel(DOM.gallerySliderOptions);
            } else if( LAYOUT.MOBILE ){
                VideoGalleryModule.destroyCarousel();
            }
        }
    };

    // Slidebars
    var SlidebarsModule = {
        handleMainNavOpenState: function(isMainNavOpen){
            isMainNavOpen ?
                DOM.$body.addClass('main-nav-open') : DOM.$body.removeClass('main-nav-open');
        },
        bindEvents: function(){
            DOM.$navToggleBTN.on('click', function(evt){
                evt.preventDefault();
                evt.stopPropagation();
                // hide/show main-navbar.
                SLIDEBARS_PLUGIN.toggle('main-navbar');
            });

            // Add close class to canvas container when Slidebar is opening.
            $( SLIDEBARS_PLUGIN.events ).on( 'opening', function ( event ) {
                $( '[canvas]' ).addClass( 'js-close-any' );
                SlidebarsModule.handleMainNavOpenState(true);
            });

            // Remove close class to canvas container when Slidebar is closing.
            $( SLIDEBARS_PLUGIN.events ).on( 'closing', function ( event ) {
                $( '[canvas]' ).removeClass( 'js-close-any' );
                SlidebarsModule.handleMainNavOpenState(false);
            });

            // Close any
            DOM.$doc.on('click', '.js-close-any', function (event) {
                if ( SLIDEBARS_PLUGIN.getActiveSlidebar() ) {
                    event.preventDefault();
                    event.stopPropagation();
                    SLIDEBARS_PLUGIN.close();
                    SlidebarsModule.handleMainNavOpenState(false);
                }
            });
        },
        initialise: function(){
            SLIDEBARS_PLUGIN.init();
            SlidebarsModule.bindEvents();
        }
    };

    // parallax module kept separate, for modularity.
    var Parallax = {
        // common animation for bg.
        scrollBG: function($elem, verticalPos, windowPos){
            var bgPos,
                slidePos = $elem.offset().top,
                newPos = Math.round( - (slidePos - windowPos) * verticalPos);

            bgPos = 'center ' + (- newPos) + 'px';
            $elem.css({'background-position': bgPos});
        },

        /*homeSlide: function(pos){
            Parallax.scrollBG( DOM.slides.$homeBG, 0.5, pos );
        },*/

        aboutUsSlide: function(pos) {
            Parallax.scrollBG( DOM.slides.$aboutUsBG, 0.35, pos );
        },

        groupSlide: function(pos) {
            Parallax.scrollBG( DOM.slides.$groupBG, 0.35, pos );
        },

        servicesSlide: function(pos){
            Parallax.scrollBG( DOM.slides.$servicesBG, 0.35, pos );
        },

        clientsSlide: function(pos){
            Parallax.scrollBG( DOM.slides.$clientsBG, 0.35, pos );
        },

        gallerySlide: function(pos){
            Parallax.scrollBG( DOM.slides.$galleryBG, 0.35, pos );
        },

        teamSlide: function(pos){
            Parallax.scrollBG( DOM.slides.$teamBG, 0.35, pos );
        },

        contactSlide: function(pos){
            Parallax.scrollBG( DOM.slides.$contactBG, 0.35, pos );
        },

        onWindowScroll: function(){
            console.log('Parallax on window scroll...');
            var scrollPos = DOM.$window.scrollTop();
            // Parallax.homeSlide(scrollPos);
            Parallax.aboutUsSlide(scrollPos);
            Parallax.groupSlide(scrollPos);
            Parallax.servicesSlide(scrollPos);
            Parallax.clientsSlide(scrollPos);
            Parallax.gallerySlide(scrollPos);
            Parallax.teamSlide(scrollPos);
            Parallax.contactSlide(scrollPos);
        },

        cacheDOMElements: function(){
            DOM.slides.$homeBG = DOM.$pageSlider.find('[data-anchor="home-page"]');
            DOM.slides.$aboutUsBG = DOM.$pageSlider.find('[data-anchor="about-us-page"]');
            DOM.slides.$groupBG = DOM.$pageSlider.find('[data-anchor="group-page"]');
            DOM.slides.$servicesBG = DOM.$pageSlider.find('[data-anchor="services-page"]');
            DOM.slides.$clientsBG = DOM.$pageSlider.find('[data-anchor="clients-page"]');
            DOM.slides.$galleryBG = DOM.$pageSlider.find('[data-anchor="gallery-page"]');
            DOM.slides.$teamBG = DOM.$pageSlider.find('[data-anchor="team-page"]');
            DOM.slides.$contactBG = DOM.$pageSlider.find('[data-anchor="contact-page"]');
        }
    };

    // TabsComponent
    var TabsModule = {
        resetTabHeader: function( $currTabLink, $tabsComponent ){
            var $tabHeaderBar = $tabsComponent.find('.tabs-header-bar');

            $tabHeaderBar.find('.nav-link').removeClass('active');
            $currTabLink.addClass( 'active' );
        },
        resetTabPanes: function( $currTabLink, $tabsComponent ){
            var currentTabPan = $currTabLink.data('target');
            var $tabContentBar = $tabsComponent.find('.tabs-content-bar');

            $tabContentBar.find('.tab-pane').removeClass('active show');
            // show current tab pane.
            $tabContentBar.find( currentTabPan ).tab('show');
        },
        bindEvents: function(){
            DOM.$tabsComponent.find('.nav-link').on('click', function(event){
                event.preventDefault();
                var $this = $(event.target);
                var isGroupTabsComponent = /^(group-page).*/.test( $this.attr('id') );
                var $tabsComponent = $this.parents('.tabs-component');

                // reset header tabs.
                TabsModule.resetTabHeader( $this, $tabsComponent );
                // reset tab panes.
                TabsModule.resetTabPanes( $this, $tabsComponent );
                // in Group page
                if( isGroupTabsComponent ){
                     setTimeout(Site.handleGroupPageTabsPaneImage, 300);
                }
            });
        },
        init: function(){
            TabsModule.bindEvents();
        }
    }

    // Team Page - custom scroll
    var TeamScrollerComponent = {
        initCustomScroller: function($el){
            $el.mCustomScrollbar({
                theme: 'dark'
            });
        },
        destroy: function($el){
            $el.mCustomScrollbar('destroy');
        },
        initTeamPageScroller: function(){
            TeamScrollerComponent.initCustomScroller(DOM.$teamScrollerComponent);
            DOM.$teamScrollerComponent.find('.mCSB_container').addClass('row');
        },
        setHeight: function(page, $scrollElem, heightPercent){
            var pageHeight = $('[data-anchor="' + page + '"]').height();
            if(LAYOUT.DESKTOP){
                $scrollElem.height( (pageHeight * heightPercent) / 100 );
            } else if (LAYOUT.MOBILE) {
                $scrollElem.height('auto');
            }
        },
        initTeamPage: function(){
            var $scrollerContainer = DOM.$teamScrollerComponent.parents('.scroller-container'),
                mobileClass = 'col-sm-12',
                desktopClass = 'col-sm-5';

            if(LAYOUT.DESKTOP){
                console.log('Create TeamPage Scroller');
                $scrollerContainer.removeClass(mobileClass).addClass(desktopClass);
                TeamScrollerComponent.setHeight('team-page', DOM.$teamScrollerComponent, 70);
                TeamScrollerComponent.initTeamPageScroller();
            } else if(LAYOUT.MOBILE){
                console.log('Destroy TeamPage Scroller');
                $scrollerContainer.removeClass(desktopClass).addClass(mobileClass);
                TeamScrollerComponent.setHeight('team-page', DOM.$teamScrollerComponent, 70);
                TeamScrollerComponent.destroy(DOM.$teamScrollerComponent);
            }
        },
        initServicePage: function(){
            TeamScrollerComponent.setHeight('service-page', DOM.$servicesMediaServiceScrollerComponent, 50);
            TeamScrollerComponent.initCustomScroller(DOM.$servicesMediaServiceScrollerComponent);
        },
        init: function(){
            TeamScrollerComponent.initTeamPage();

            if(LAYOUT.DESKTOP){
                TeamScrollerComponent.initServicePage();
            } else {
                TeamScrollerComponent.destroy(DOM.$servicesMediaServiceScrollerComponent);
            }

        }
    };

    // Contact Us - Form Validation
    var FormModule = {
        TIMEOUT_ID: undefined,
        RegExpr: {
            name: new RegExp(/^[\w\s\.*]{3,50}$/),
            email: new RegExp(/^\S+@\S+\.\S+/),
            phone: new RegExp(/^([0-9]{7}|[0-9]{10})$/),
            subject: new RegExp(/^[\w\s\.*]{3,200}$/),
            message: new RegExp(/.+/)
        },
        validateInputField: function ($input, inputVal, regExpr) {
            var $submitBtn = DOM.$contactForm.find('button');
            if( "" !== inputVal && regExpr.test(inputVal) ){
                $input.next().hide();
                DOM.$contactForm.removeClass("invalid");
                $submitBtn.removeAttr('disabled');
            } else {
                $input.next().show();
                DOM.$contactForm.addClass("invalid");
                $submitBtn.attr({ 'disabled': true });
            }
        },
        initFormValidation: function () {
            DOM.$contactForm.on("blur", "input, textarea", function (evt) {
                var $input = $(this),
                    inputVal = $input.val(),
                    regExpr = FormModule.RegExpr[ $input.attr("name") ];

                FormModule.TIMEOUT_ID = AsyncTaskHandler(FormModule.TIMEOUT_ID, function(){
                    console.log('Form Module keyup event triggered.**********************');
                    FormModule.validateInputField($input, inputVal, regExpr);
                }, 1000);
            });

            DOM.$contactForm.on("submit", function (evt) {
                evt.preventDefault();

                var $form = $(this),
                    $nameInput = $form.find("#name"),
                    $emailInput = $form.find("#email"),
                    $phoneInput = $form.find("#phone"),
                    $subjectInput = $form.find("#subject"),
                    $msgInput = $form.find("#message"),
                    $submitBtn = DOM.$contactForm.find('button');

                $submitBtn.attr({ 'disabled': true });
                $form.find('.form-status').text('Please wait...');

                if (
                    FormModule.validateInputField($nameInput, $nameInput.val(), FormModule.RegExpr.name),
                    FormModule.validateInputField($emailInput, $emailInput.val(), FormModule.RegExpr.email),
                    FormModule.validateInputField($phoneInput, $phoneInput.val(), FormModule.RegExpr.phone),
                    FormModule.validateInputField($subjectInput, $subjectInput.val(), FormModule.RegExpr.subject),
                    FormModule.validateInputField($msgInput, $msgInput.val(), FormModule.RegExpr.message),
                    !$form.hasClass("invalid")
                ) {
                    var payLoad = $form.serialize();
                    $.post("js/send_mail.php", { data: payLoad }, "text").done(function (response) {
                        var msg = response.replace('<div>','').replace('</div>','');
                        $form.find('.form-status').html(msg);
                        $form.trigger('reset');
                        // clear message after 10 seconds
                        setTimeout(function(){
                            $form.find('.form-status').html('');
                        }, 10000);
                    }).fail(function (responseError) {
                        console.warn('ERROR: While submitting request.');
                    });
                }
            })
        },
    };

    var Site = {
        // reset active slide's dot in HomePageCarousel.
        updateHomePageCarouselDot: function(i){
            var activeClass = 'active';
            var $dotsNav = DOM.$homeSlider.find('.owl-dots');
            var $dots = $dotsNav.children().removeClass(activeClass);
            $dots.eq(i).addClass(activeClass);
        },
        // Toggle the Scroll btns.
        toggleScrollBtns: function( $elemToShow, $elemToHide, showBoth ){
            // except 1st & last slide, all slides will show both buttons.
            if(showBoth){
                $elemToHide.removeClass('d-none');
                $elemToShow.removeClass('d-none');
            } else {
                $elemToHide.addClass('d-none');
                $elemToShow.removeClass('d-none');
            }
        },
        // change history without triggering the page scroll.
        changeHistoryState: function( hashname ){
            history.pushState(null, null, '#' + hashname);
        },
        onHomePageSlideChange: function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
            var slidesDesktopHash = [null, null, 'home-page', 'home-page/slide-2', 'home-page/slide-3'],
                slidesMobileHash = ['home-page/slide-3', 'home-page/slide-2', 'home-page'],
                hash, slideIndex;

            // if URL hash is #home-page, then only do this. Else do nothing.
            // and if the hash is empty then default to 'home-page'.
            hash = (location.hash).toLowerCase().replace("#", "") || slidesMobileHash[0];

            if( hash === slidesMobileHash[0] ){
                if(LAYOUT.DESKTOP){
                    slideIndex = event.item.index;
                    Site.hashChangeDispatcher( slidesDesktopHash[slideIndex] );
                } else if(LAYOUT.MOBILE){
                    slideIndex = (optionHash.slideNum + 1) % 3;
                    Site.hashChangeDispatcher( slidesMobileHash[slideIndex] );
                }

            }
        },
        setHeader: function( classes, logoImage, activePageTitle ){
            // addClassToHeader
            DOM.$header.attr('class', classes );

            // changeLogoImage
            DOM.$logo.find('img').attr( 'src', logoImage );

            // Show active page title in navbar.
            DOM.$activePageTitle.fadeOut({
                duration: 200, easing: 'swing',
                complete: function(){
                    DOM.$activePageTitle.text( activePageTitle );
                    DOM.$activePageTitle.fadeIn({
                        duration: 600, easing: 'swing'
                    });
                }
            });
        },
        onHashChange: {
            "home": function(){
                var classes = 'container-fluid position-fixed home-page slide-1';
                Site.setHeader( classes, LOGO.white, '' );
                Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn );
                Site.updateHomePageCarouselDot(0);
            },
            "home-page": {
                "slide-2": function(){
                    var classes = 'container-fluid position-fixed home-page slide-2';
                    Site.setHeader( classes, LOGO.white, '' );
                    Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn );
                    Site.updateHomePageCarouselDot(1);
                },
                "slide-3": function(){
                    var classes = 'container-fluid position-fixed home-page slide-3';
                    Site.setHeader( classes, LOGO.whiteGrey, '' );
                    Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn );
                    Site.updateHomePageCarouselDot(2);
                }
            },
            "about-us-page": function(){
                var classes = 'container-fluid position-fixed about-us-page';
                Site.setHeader( classes, LOGO.white, 'ABOUT US' );
                Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn, true );
            },
            "group-page": function(){
                var classes = 'container-fluid position-fixed group-page';
                Site.setHeader( classes, LOGO.blueGrey, 'GROUP' );
                Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn, true );
            },
            "services-page": function(){
                var classes = 'container-fluid position-fixed services-page';
                Site.setHeader( classes, LOGO.blueGrey, 'SERVICES' );
                Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn, true );
            },
            "clients-page": function(){
                var classes = 'container-fluid position-fixed clients-page';
                Site.setHeader( classes, LOGO.blueGrey, 'CLIENTS' );
                Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn, true );
            },
            "gallery-page": function(){
                var classes = 'container-fluid position-fixed gallery-page';
                Site.setHeader( classes, LOGO.blueGrey, 'GALLERY' );
                Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn, true );
            },
            "team-page": function(){
                var classes = 'container-fluid position-fixed team-page';
                Site.setHeader( classes, LOGO.blueGrey, 'TEAM' );
                Site.toggleScrollBtns( DOM.$scrollDownBtn, DOM.$scrollUpBtn, true );
            },
            "contact-page": function(){
                var classes = 'container-fluid position-fixed contact-page';
                Site.setHeader( classes, LOGO.white, 'CONTACT' );
                Site.toggleScrollBtns( DOM.$scrollUpBtn, DOM.$scrollDownBtn );
            }
        },
        hashChangeDispatcher: function(hash){
            var hashArr = hash ? hash.split("/") : [];
            // console.log(hashArr);

            try {
                if(hashArr.length === 2){
                    Site.onHashChange[hashArr[0]][hashArr[1]]();
                } else {
                    (hashArr[0] === 'home-page') ?
                        Site.onHashChange['home']() : Site.onHashChange[hashArr[0]]();
                }
            } catch(error){
                console.warn("There is no matching URL, redirecting to Home");
                Site.onHashChange["home"]();
            }
        },

        bindHashChangeEvent: function(){
            DOM.$window.on("hashchange", function(event){
                var hash = (location.hash).toLowerCase().replace("#", "");

                // after a .2 seconds delay close the nav panel.
                setTimeout(function(){
                    SLIDEBARS_PLUGIN.close();
                    Site.scrollToPage(hash);
                }, 200);
            });
        },

        calculateSlideIndex: function(){
            var currScrollPos = DOM.$window.scrollTop(),
                slideIndex = -1;

            if(LAYOUT.DESKTOP){
                slideIndex = Math.floor(currScrollPos / WINDOW_HEIGHT);
            } else if(LAYOUT.MOBILE){
                for (var slideName in DOM.slides) {
                    var slideTopPos = DOM.slides[slideName].offset().top;
                    (currScrollPos > slideTopPos) ? ++slideIndex : slideIndex;
                    console.log('KEY position: ', slideTopPos);
                }
                console.log('Current Slide Index: ', slideIndex);
            }

            // it's not possible to calculate the -1th slide.
            return ( slideIndex < 0 ) ? 0 : slideIndex;
        },

        calculateSlideHash: function( slideIndex ){
            CURRENT_SLIDE_INDEX = slideIndex;
            console.log('Current Slide Index: ', CURRENT_SLIDE_INDEX);
            // slide visible in viewport,
            var $slide = DOM.slides[ DOM.slidesArray[CURRENT_SLIDE_INDEX] ];
            slideHash = $slide.data('anchor');
            return slideHash;
        },

        afterWindowScrollStop: function(){
            console.log(' ** ** ** After Window Scroll Stop ** ** ** ');
            var currScrollPos = DOM.$window.scrollTop();
            // var slideIndex = Math.floor(currScrollPos / WINDOW_HEIGHT);
            var slideIndex = Site.calculateSlideIndex();

            // if calculations return the same slideindex then do nothing.
            if(slideIndex !== CURRENT_SLIDE_INDEX){
                slideHash = Site.calculateSlideHash( slideIndex );
                Site.hashChangeDispatcher( slideHash );
                Site.changeHistoryState( slideHash );
            } else {
                console.info('slideIndex is: ' + slideIndex + ' hence no hashChange triggered.');
            }
        },

        windowScrollDispatcher: function(){
            // Parallax is only for Desktop.
            (LAYOUT.DESKTOP) ? Parallax.onWindowScroll() : false;

            /*if(TIMEOUT_ID !== undefined){
                // console.log("Timer Cleared!");
                clearTimeout(TIMEOUT_ID);
            }

            TIMEOUT_ID = setTimeout(Site.afterWindowScrollStop, 1000);*/

            TIMEOUT_ID = AsyncTaskHandler(TIMEOUT_ID, Site.afterWindowScrollStop, 1000);
        },

        bindWindowScrollEvent: function(){
            DOM.$window.on('scroll', function(evt){
                evt.preventDefault();
                Site.windowScrollDispatcher();
            });
        },

        /*toggleCarotIcon: function(classToRemove, classToAdd){
            DOM.$contactCarotIcon
                .removeClass(classToRemove)
                .addClass(classToAdd);
        },*/

        scrollToNextSlide: function(){

            DOM.$scrollUpBtn.on('click', function(evt){
                Site.scrollToPage('home-page');
                CURRENT_SLIDE_INDEX = 0;
                Site.changeHistoryState( '' );
            });

            DOM.$scrollDownBtn.on('click', function(evt){
                var nextSlideIndex = CURRENT_SLIDE_INDEX + 1;
                var nextSlideHash = Site.calculateSlideHash( nextSlideIndex );
                Site.scrollToPage( nextSlideHash );
                Site.changeHistoryState( nextSlideHash );
            });
        },

        scrollToPage: function( hashName ){
            // if hashName is empty then default to 'home-page'.
            var hash = hashName ? hashName : 'home-page';

            var slides = {
                'home-page': DOM.slides.$homeBG,
                'about-us-page': DOM.slides.$aboutUsBG,
                'group-page': DOM.slides.$groupBG,
                'services-page': DOM.slides.$servicesBG,
                'clients-page': DOM.slides.$clientsBG,
                'gallery-page': DOM.slides.$galleryBG,
                'team-page': DOM.slides.$teamBG,
                'contact-page': DOM.slides.$contactBG
            };

            var position = slides[hash].offset().top;
            DOM.$scrollingWindow.stop().animate({scrollTop: position}, 1000, 'swing', function() {
                Site.hashChangeDispatcher(hash);
            });
        },

        buildNonGovtCarousel: function(){
            DOM.$nonGovtSlider.trigger('destroy.owl.carousel');

            var $nonGovtCarouselColumns = DOM.$nonGovtSlider.children('.column'),
                $govtCarouselColumns = DOM.$govtSlider.children('.column');

            if(LAYOUT.DESKTOP){
                $nonGovtCarouselColumns.removeClass('col-4').addClass('col');
                $govtCarouselColumns.removeClass('col-4').addClass('col');
                DOM.$nonGovtSlider.owlCarousel(DOM.nonGovtSliderOptions);
            } else if(LAYOUT.MOBILE){
                $nonGovtCarouselColumns.removeClass('col').addClass('col-4');
                $govtCarouselColumns.removeClass('col').addClass('col-4');
            }
        },

        // only for mobile.
        // copy the logoImage and show at top, in mobile layout.
        handleGroupPageTabsPaneImage: function(){
            if(LAYOUT.MOBILE){
                var $logoImg = DOM.slides.$groupBG.find('.tab-pane.active').find('.tab-pane-logo');
                // clone image from tab-pane
                var $clonedLogoImg = $logoImg.clone().removeClass('d-none');
                // hide the image from tab-pane.
                $logoImg.addClass('d-none');
                // insert img at top if already any img is visible.
                DOM.slides.$groupBG.children('img').remove();
                // insert cloned img at top.
                DOM.slides.$groupBG.prepend($clonedLogoImg);
            } else if(LAYOUT.DESKTOP){
                var $activeTabPane = DOM.slides.$groupBG.find('.tab-pane.active');
                // var $logoImg = DOM.slides.$groupBG.children('img');
                $activeTabPane.children('img').removeClass('d-none');
            }
        },

        // handles Group page logo alignment in Desktop and moble layout.
        handleGroupPageMobileLayout: function( toBeInserted ){
            // insert hero images for mobile/tablet layout.
            // if its already inserted then do nothing.
            if( toBeInserted && !LAYOUT.heroImageInserted ){
                Site.handleGroupPageTabsPaneImage();

            // remove hero images for desktop layout, if already inserted.
            } else if( !toBeInserted && LAYOUT.heroImageInserted ) {
                Site.handleGroupPageTabsPaneImage();
            }
        },

        insertHeroImage: function(item){
            var $el = DOM.slides[item.$el];
            var img = ('<img class="img-fluid" src="img/mobile/background/' +
                item.imgSrc + '" alt="' + item.imgAltText + '">');

            $el.prepend(img);
            // to remove 'background-position' calculated
            // at the time of desktop layout.
            // this is required for 'bg-common-wave' to be positioned correctly.
            $el.removeAttr('style');
        },

        // only loads hero images above the tabs, in mobile layout.
        // for desktop layout remove those.
        insertHeroImages: function( toBeInserted ){
            // insert hero images for mobile/tablet layout.
            // if its already inserted then do nothing.
            if( toBeInserted && !LAYOUT.heroImageInserted ){
                DOM.heroImagesData.forEach(Site.insertHeroImage);
                LAYOUT.heroImageInserted = true;
            // remove hero images for desktop layout, if already inserted.
            } else if( !toBeInserted && LAYOUT.heroImageInserted ) {
                DOM.heroImagesData.forEach(function(item){
                    DOM.slides[item.$el].children('img').remove();
                });
                LAYOUT.heroImageInserted = false;
            }
        },

        initHeroCarousel: function(){
            console.log('Init Hero Carousel... ......');
            var $desktopHomeCarousel = DOM.$homeSlider,
                $mobileHomeCarousel = DOM.$homeMobileSlider;

            if(LAYOUT.DESKTOP){
                // destroy the Mobile version of Carousel.
                $mobileHomeCarousel.cycle('destroy');
                $desktopHomeCarousel.trigger('destroy.owl.carousel');
                $desktopHomeCarousel.owlCarousel(DOM.homeSliderOptions).removeClass('owl-hidden');
                $desktopHomeCarousel
                    .off('changed.owl.carousel')
                    .on('changed.owl.carousel', Site.onHomePageSlideChange);

            } else if(LAYOUT.MOBILE) {
                // destroy the Desktop version of Carousel.
                $desktopHomeCarousel.trigger('destroy.owl.carousel');
                $mobileHomeCarousel.cycle(DOM.homeSliderMobileOptions);
                $mobileHomeCarousel
                    .off('cycle-after')
                    .on('cycle-after', Site.onHomePageSlideChange);
            }
        },

        initMobileLayout: function(){
            // trigger all callbacks required to initiate Mobile/Tablet layout.
            console.info('*** Mobile Layout ***');

            // insert images in mobile layout.
            Site.handleGroupPageMobileLayout(true);
            Site.insertHeroImages(true);
            // Non-Govt Carousel
            Site.buildNonGovtCarousel();

            // Load Gallery Module with Modal window
            VideoGalleryModule.init();

            TeamScrollerComponent.init();

            // Owl-Carousel - HomePageSlider
            Site.initHeroCarousel();
        },

        initDesktopLayout: function(){
            // trigger all callbacks required to initiate Desktop layout.
            console.info('*** Desktop Layout ***');

            // Owl-Carousel - HomePageSlider
            Site.initHeroCarousel();

            // reset GroupPage Tab images.
            Site.handleGroupPageMobileLayout(false);
            // remove images in mobile layout.
            Site.insertHeroImages(false);

            Site.buildNonGovtCarousel();

            // Load Gallery Module with Modal window
            VideoGalleryModule.init();

            TeamScrollerComponent.init();
        },

        /*
            NOTE: necessary to determine intially,
            whether we are on mobile/desktop device.
        */
        switchLayout: function(){
            console.info('LOAD WEBSITE AS PER WINDOW WIDTH...');
            LAYOUT.DESKTOP = (WINDOW_WIDTH >= LAYOUT_BREAKPOINT);
            LAYOUT.MOBILE = (WINDOW_WIDTH < LAYOUT_BREAKPOINT);

            // handle Mobile Settings.
            (LAYOUT.MOBILE) ? Site.initMobileLayout(): Site.initDesktopLayout();
        },

        setWindowDimension: function(){
            // calculate the window height.
            WINDOW_HEIGHT = DOM.$window.height();
            WINDOW_WIDTH = DOM.$window.width();

            Site.switchLayout();
        },

        afterWindowResizeStop: function(){
            console.log("Window resize triggered...");
            Site.setWindowDimension();
        },

        bindWindowResizeEvent: function(){
            DOM.$window.on('resize', function(evt){

                /*if(TIMEOUT_ID_RESIZE !== undefined){
                    // console.log("Resize Timer Cleared!");
                    clearTimeout(TIMEOUT_ID_RESIZE);
                }

                TIMEOUT_ID_RESIZE = setTimeout(Site.afterWindowResizeStop, 500);*/

                TIMEOUT_ID_RESIZE = AsyncTaskHandler(TIMEOUT_ID_RESIZE, Site.afterWindowResizeStop, 500);
            });
        },

        bindEvents: function(){

            /* on hash change:
                1. update the LOGO
                2. update nav icons.
            */
            Site.bindHashChangeEvent();
            /* on window scroll:
                1: trigger animated scroll
                2. trigger hash change
            */
            Site.bindWindowScrollEvent();

            // On Tab Click - Hide/Show TabPane.
            TabsModule.init();

            // On ContactPage - Collapsible click
            /*DOM.$contactCollapsible.on('shown.bs.collapse', function(){
                Site.toggleCarotIcon('fa-caret-down', 'fa-caret-up');
            });
            DOM.$contactCollapsible.on('hidden.bs.collapse', function(){
                Site.toggleCarotIcon('fa-caret-up', 'fa-caret-down');
            });*/

            // Contact Form - validation initialization.
            FormModule.initFormValidation();

            // scroll to next slide.
            Site.scrollToNextSlide();
        },

        init: function(){
            // Parallax: cache DOM elements once & reference multiple times.
            Parallax.cacheDOMElements();

            // calculate the window height/width.
            Site.setWindowDimension();

            /* on window resize:
                1. capture window height.
            */
            Site.bindWindowResizeEvent();

            // SlidebarsJS
            SlidebarsModule.initialise();

            // bind app specific events.
            Site.bindEvents();

            // trigger manually once to reset - defaults to home, if empty hash.
            DOM.$window.trigger("hashchange");
        }
    };

    $(function(){
        if( SiteRenewal.isRenewalRequired() ){
            var notice = SiteRenewal.getNotification();
            DOM.$body.addClass("site-renewal").html( '<h5>' + notice + '</h5>' );
            console.warn( notice );
            SiteRenewal.notify();
        } else {
            Site.init();
        }
    });

})(jQuery, window, undefined);
