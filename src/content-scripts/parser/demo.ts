export const demoHtml = `  <header class="top-bar js-top-bar top-bar__network _fixed">
<div class="wmx12 mx-auto grid ai-center h100" role="menubar">
    <div class="-main grid--cell">
            <a href="#" class="left-sidebar-toggle p0 ai-center jc-center js-left-sidebar-toggle" role="menuitem" aria-haspopup="true" aria-controls="left-sidebar" aria-expanded="false"><span class="ps-relative"></span></a>
            <div class="topbar-dialog leftnav-dialog js-leftnav-dialog dno">
                <div class="left-sidebar js-unpinned-left-sidebar" data-can-be="left-sidebar" data-is-here-when="sm"></div>
            </div>
                <a href="https://stackoverflow.com" class="-logo js-gps-track"
                    data-gps-track="top_nav.click({is_current:false, location:2, destination:8})">
                    <span class="-img _glyph">Stack Overflow</span>
                </a>



    </div>

        <ol class="list-reset grid gs4" role="presentation">

                <li class="grid--cell md:d-none">
                    <a href="/company" class="-marketing-link js-gps-track"
                       data-gps-track="top_nav.products.click({location:2, destination:7})"
                        data-ga="[&quot;top navigation&quot;,&quot;about menu click&quot;,null,null,null]">About</a>
                </li>

            <li class="grid--cell">
                <a href="#"
                    class="-marketing-link js-gps-track js-products-menu"
                    aria-controls="products-popover"
                    data-controller="s-popover"
                    data-action="s-popover#toggle"
                    data-s-popover-placement="bottom"
                    data-s-popover-toggle-class="is-selected"
                    data-gps-track="top_nav.products.click({location:2, destination:1})"
                    data-ga="[&quot;top navigation&quot;,&quot;products menu click&quot;,null,null,null]">
                    Products
                </a>
            </li>

                <li class="grid--cell md:d-none">
                    <a href="/teams" class="-marketing-link js-gps-track"
                       data-gps-track="top_nav.products.click({location:2, destination:7})"
                        data-ga="[&quot;top navigation&quot;,&quot;learn more - teams&quot;,null,null,null]">For Teams</a>
                </li>
        </ol>
        <div class="s-popover ws2 mtn2 p0"
                id="products-popover"
                role="menu"
                aria-hidden="true">
            <div class="s-popover--arrow"></div>
            <ol class="list-reset s-anchors s-anchors__inherit">
                <li class="m6">
                    <a href="/questions" class="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                       data-gps-track="top_nav.products.click({location:2, destination:2})"
                       data-ga="[&quot;top navigation&quot;,&quot;public qa submenu click&quot;,null,null,null]">
                        <span class="fs-body1 d-block">Stack Overflow</span>
                        <span class="fs-caption d-block fc-light">Public questions &amp; answers</span>
                    </a>
                </li>
                <li class="m6">
                    <a href="/teams" class="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                       data-gps-track="top_nav.products.click({location:2, destination:3})"
                       data-ga="[&quot;top navigation&quot;,&quot;teams submenu click&quot;,null,null,null]">
                        <span class="fs-body1 d-block">Stack Overflow for Teams</span>
                        <span class="fs-caption d-block fc-light">Where developers &amp; technologists share private knowledge with coworkers</span>
                    </a>
                </li>
                <li class="m6">
                    <a href="/jobs?so_source=ProductsMenu&so_medium=StackOverflow" class="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                        data-gps-track="top_nav.products.click({location:2, destination:9})"
                        data-ga="[&quot;top navigation&quot;,&quot;jobs submenu click&quot;,null,null,null]">
                        <span class="fs-body1 d-block">Jobs</span>
                        <span class="fs-caption d-block fc-light">Programming &amp; related technical career opportunities</span>
                    </a>
                </li>
                <li class="m6">
                    <a href="https://stackoverflow.com/talent" class="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                       data-gps-track="top_nav.products.click({location:2, destination:5})"
                       data-ga="[&quot;top navigation&quot;,&quot;talent submenu click&quot;,null,null,null]">
                        <span class="fs-body1 d-block">Talent</span>
                        <span class="fs-caption d-block fc-light">Recruit tech talent &amp; build your employer brand</span>
                    </a>
                </li>
                <li class="m6">
                    <a href="https://stackoverflow.com/advertising" class="bar-sm p6 d-block h:bg-black-100 js-gps-track"
                       data-gps-track="top_nav.products.click({location:2, destination:6})"
                       data-ga="[&quot;top navigation&quot;,&quot;advertising submenu click&quot;,null,null,null]">
                        <span class="fs-body1 d-block">Advertising</span>
                        <span class="fs-caption d-block fc-light">Reach developers &amp; technologists worldwide</span>
                    </a>
                </li>
                <li class="bg-black-025 bt bc-black-2 py6 px6 bbr-sm">
                    <a href="/company" class="fc-light d-block py6 px6 h:fc-black-800 js-gps-track"
                        data-gps-track="top_nav.products.click({location:2, destination:7})"
                        data-ga="[&quot;top navigation&quot;,&quot;about submenu click&quot;,null,null,null]">About the company</a>
                </li>
            </ol>
        </div>

        <form id="search" role="search" action=/search class="grid--cell fl-grow1 searchbar px12 js-searchbar " autocomplete="off">
                <div class="ps-relative">
                    <input name="q"
                           type="text"
                           placeholder="Search&#x2026;"
                           value=""
                           autocomplete="off"
                           maxlength="240"
                           class="s-input s-input__search js-search-field "
                           aria-label="Search"
                           aria-controls="top-search" 
                           data-controller="s-popover"
                           data-action="focus->s-popover#show"
                           data-s-popover-placement="bottom-start"/>
                    <svg aria-hidden="true" class="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"/></svg>
                    <div class="s-popover p0 wmx100 wmn4 sm:wmn-initial js-top-search-popover s-popover--arrow__tl" id="top-search" role="menu">
<div class="js-spinner p24 grid ai-center jc-center d-none">
    <div class="s-spinner s-spinner__sm fc-orange-400">
        <div class="v-visible-sr">Loading&#x2026;</div>
    </div>
</div>

<span class="v-visible-sr js-screen-reader-info"></span>
<div class="js-ac-results overflow-y-auto hmx3 d-none"></div>

<div class="js-search-hints" aria-describedby="Tips for searching"></div>
</div>


<div id="left-sidebar" data-is-here-when="md lg" class="left-sidebar js-pinned-left-sidebar ps-relative">
<div class="left-sidebar--sticky-container js-sticky-leftnav">
    <nav role="navigation">
        <ol class="nav-links">
    <li class="">
        <a
            href="/"
            class="pl8 js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:8})">
Home            </a>
    </li>
            <li>
                <ol class="nav-links">
                        <li class="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">Public</li>
                            <li class=" youarehere">
        <a id="nav-questions"
            href="/questions"
            class="pl8 js-gps-track nav-links--link -link__with-icon"
            
            data-gps-track="top_nav.click({is_current:true, location:2, destination:1})">
<svg aria-hidden="true" class="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 100 16A8 8 0 009 1zM8 15.32a6.4 6.4 0 01-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 012.32 10.24v.01z"/></svg>                    <span class="-link--channel-name">Stack Overflow</span>
        </a>
    </li>

    <li class="">
        <a id="nav-tags"
            href="/tags"
            class=" js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:2})">
Tags            </a>
    </li>
    <li class="">
        <a id="nav-users"
            href="/users"
            class=" js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:3})">
Users            </a>
    </li>
                        <li class="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">Find a Job</li>
    <li class="">
        <a id="nav-jobs"
            href="/jobs?so_medium=StackOverflow&amp;so_source=SiteNav"
            class=" js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:6})">
Jobs            </a>
    </li>
    <li class="">
        <a id="nav-companies"
            href="/jobs/companies?so_medium=StackOverflow&amp;so_source=SiteNav"
            class=" js-gps-track nav-links--link"
            
            data-gps-track="top_nav.click({is_current:false, location:2, destination:12})">
Companies            </a>
    </li>
                </ol>
            </li>
                <li>
                    <ol class="nav-links">
                            <li class="grid ai-center jc-space-between ml8 mt24 mb4">
                                <div class="grid--cell tt-uppercase fs-fine fc-light">Teams</div>
                                <div class="grid--cell fs-fine fc-light mr4">
                                    <a href="javascript:void(0)" class="s-link s-link__inherit js-gps-track"
                                        role="button"
                                        aria-controls="popover-teams-create-cta"
                                        data-controller="s-popover"
                                        data-action="s-popover#toggle"
                                        data-s-popover-placement="bottom-start"
                                        data-s-popover-toggle-class="is-selected"
                                        data-gps-track="teams.create.left-sidenav.click({ Action: ShowInfo })"
                                        data-ga="[&quot;teams left navigation - anonymous&quot;,&quot;left nav show teams info&quot;,null,null,null]">
                                        What&#x2019;s this?
                                    </a>

                                </div>
                            </li>
                            <li class="ps-relative">
                                <a href="https://stackoverflow.com/teams"
                                    class="pl8 js-gps-track nav-links--link"
                                    title="Stack Overflow for Teams is a private, secure spot for your organization's questions and answers."
                                    data-gps-track="teams.create.left-sidenav.click({ Action: TeamsClick })"
                                    data-ga="[&quot;teams left navigation - anonymous&quot;,&quot;left nav team click&quot;,&quot;stackoverflow.com/teams&quot;,null,null]">
                                    <div class="grid ai-center">
                                        <div class="grid--cell s-avatar va-middle bg-orange-400">
                                            <div class="s-avatar--letter mtn1">
                                                <svg aria-hidden="true" class="svg-icon iconBriefcaseSm" width="14" height="14" viewBox="0 0 14 14"><path d="M4 3a1 1 0 011-1h4a1 1 0 011 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 012 10.5v-5C2 4.67 2.67 4 3.5 4H4V3zm5 1V3H5v1h4z"/></svg>
                                            </div>
                                            <svg aria-hidden="true" class="native s-avatar--badge svg-icon iconShieldXSm" width="9" height="10" viewBox="0 0 9 10"><path d="M0 1.84L4.5 0 9 1.84v3.17C9 7.53 6.3 10 4.5 10 2.7 10 0 7.53 0 5.01V1.84z" fill="var(--white)"/><path d="M1 2.5L4.5 1 8 2.5v2.51C8 7.34 5.34 9 4.5 9 3.65 9 1 7.34 1 5.01V2.5zm2.98 3.02L3.2 7h2.6l-.78-1.48a.4.4 0 01.15-.38c.34-.24.73-.7.73-1.14 0-.71-.5-1.23-1.41-1.23-.92 0-1.39.52-1.39 1.23 0 .44.4.9.73 1.14.12.08.18.23.15.38z" fill="var(--black-500)"/></svg>
                                        </div>
                                        <div class="grid--cell pl6">
Free 30 Day Trial                                            </div>
                                    </div>
                                </a>
                            </li>
                    </ol>
                </li>
        </ol>
    </nav>
</div>


    <div class="s-popover w-auto p16"
         id="popover-teams-create-cta"
         role="menu"
         aria-hidden="true">
        <div class="s-popover--arrow"></div>

        <div class="ps-relative overflow-hidden">
            <p class="mb2"><strong>Teams</strong></p>
            <p class="mb16 fs-caption fc-medium">Q&amp;A for Work</p>
            <p class="mb8 fs-caption fc-medium">

                        Stack Overflow for Teams is a private, secure spot for you and
                        your coworkers to find and share information.
                                    </p>
            <a href="https://stackoverflow.com/teams"
               class="js-gps-track ws-nowrap d-block"
               data-gps-track="teams.create.left-sidenav.click({ Action: CtaClick })"
               data-ga="[&quot;teams left navigation - anonymous&quot;,&quot;left nav cta&quot;,&quot;stackoverflow.com/teams&quot;,null,null]">
Learn more                </a>
        </div>

        <div class="ps-absolute t8 r8">
            <svg width="53" height="49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49 11l.2 31H18.9L9 49v-7H4V8h31" fill="#CCEAFF" /><path d="M44.5 19v-.3l-.2-.1-18-13-.1-.1H.5v33h4V46l.8-.6 9.9-6.9h29.3V19z" stroke="#1060E1" stroke-miterlimit="10" /><path d="M31 2l6-1.5 7 2V38H14.9L5 45v-7H1V6h25l5-4z" fill="#fff" /><path d="M7 16.5h13m-13 6h14m-14 6h18" stroke="#1060E1" stroke-miterlimit="10" /><path d="M39 30a14 14 0 1 0 0-28 14 14 0 0 0 0 28z" fill="#FFB935" /><path d="M50.5 14a13.5 13.5 0 1 1-27 0 13.5 13.5 0 0 1 27 0z" stroke="#F48024" stroke-miterlimit="10" /><path d="M32.5 21.5v-8h9v8h-9zm2-9.5V9.3A2.5 2.5 0 0 1 37 6.8a2.5 2.5 0 0 1 2.5 2.5V12h-5zm2 3v2m1-2v2" stroke="#fff" stroke-miterlimit="10" /></svg>
        </div>
    </div>

</div>



    <div id="content" class="snippet-hidden">

        
<div itemprop="mainEntity" itemscope itemtype="http://schema.org/Question">
<link itemprop="image" href="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a">

<div class="inner-content clearfix">

    

        <div id="question-header" class="grid sm:fd-column">
                    <h1 itemprop="name" class="grid--cell fs-headline1 fl1 ow-break-word mb8"><a href="/questions/5083682/get-selected-html-in-browser-via-javascript" class="question-hyperlink">Get Selected HTML in browser via Javascript</a></h1>

            <div class="ml12 aside-cta grid--cell print:d-none sm:ml0 sm:mb12 sm:order-first sm:as-end">
                    <a href="/questions/ask" class="ws-nowrap s-btn s-btn__primary" >
    Ask Question
</a>

            </div>
        </div>
        <div class="grid fw-wrap pb8 mb16 bb bc-black-2">
                <div class="grid--cell ws-nowrap mr16 mb8" title="2011-02-22 20:38:26Z">
                    <span class="fc-light mr2">Asked</span>
                    <time itemprop="dateCreated" datetime="2011-02-22T20:38:26">9 years, 8 months ago</time>
                </div>
                    <div class="grid--cell ws-nowrap mr16 mb8">
                        <span class="fc-light mr2">Active</span>
                        <a href="?lastactivity" class="s-link s-link__inherit" title="2019-01-16 18:17:33Z">1 year, 9 months ago</a>
                    </div>
                <div class="grid--cell ws-nowrap mb8" title="Viewed 17,234 times">
                    <span class="fc-light mr2">Viewed</span>
                    17k times
                </div>
        </div>
        <div id="mainbar" role="main" aria-label="question and answers">

            
<div class="question" data-questionid="5083682"  id="question">
<style>
</style>
<div class="js-zone-container zone-container-main">
<div id="dfp-tlb" class="everyonelovesstackoverflow everyoneloves__top-leaderboard everyoneloves__leaderboard"></div>
<div class="js-report-ad-button-container " style="width: 728px"></div>
</div>

<div class="post-layout">
    <div class="votecell post-layout--left">
        <div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="5083682">
    <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" title="This question shows research effort; it is useful and clear" aria-pressed="false" aria-label="Up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="m0 svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
    <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="19">19</div>
    <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" title="This question does not show any research effort; it is unclear or not useful" aria-pressed="false" aria-label="Down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="m0 svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>

    <button class="js-bookmark-btn s-btn s-btn__unset c-pointer py4 js-gps-track" 
            data-controller="s-tooltip" data-s-tooltip-placement="right" title="Bookmark this question."
            aria-pressed="false" aria-label="Bookmark (18)" data-selected-classes="fc-yellow-600"
            data-gps-track="post.click({ item: 1, priv: 0, post_type: 1 })">
        <svg aria-hidden="true" class="svg-icon iconBookmark" width="18" height="18" viewBox="0 0 18 18"><path d="M6 1a2 2 0 00-2 2v14l5-4 5 4V3a2 2 0 00-2-2H6zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77z"/></svg>
        <div class="js-bookmark-count mt4" data-value="18">18</div>
    </button>



    <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py6 mx-auto" href="/posts/5083682/timeline" data-shortcut="T" data-controller="s-tooltip" data-s-tooltip-placement="right" title="Show activity on this post." aria-label="Timeline"><svg aria-hidden="true" class="mln2 mr0 svg-icon iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 113.73 6.77L8.2 14.3A6 6 0 105 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

    </div>

    

<div class="postcell post-layout--right">

<div class="s-prose js-post-body" itemprop="text">
                
<p>I have a requirement for my web app to allow the user to "Print Selected Only". In other words, a user selects text and potentially images and then clicks this option. I've seen examples of getting selected text with Javascript, but haven't found a solution for getting the selected html itself. </p>

<p>As an example if I have a document like so:</p>

<pre><code>&lt;html&gt;
&lt;head&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;A bunch of text&lt;/p&gt;
&lt;img src="someimage.jpg" /&gt;
&lt;p&gt;Even more text&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>If user highlights the image and the second paragraph, I'd want the javascript to return:</p>

<pre><code>&lt;img src="someimage.jpg" /&gt;
&lt;p&gt;Even more text&lt;/p&gt;
</code></pre>

<p>Is this possible and how would one go about doing it?</p>

<p>Edit: I ended up going with a js library called <a href="https://github.com/timdown/rangy" rel="noreferrer">Rangy</a> for this.</p>
</div>

    <div class="mt24 mb12">
        <div class="post-taglist grid gs4 gsy fd-column">
            <div class="grid ps-relative">
                <a href="/questions/tagged/javascript" class="post-tag" title="show questions tagged &#39;javascript&#39;" rel="tag">javascript</a> 
            </div>
        </div>
    </div>

<div class="mb0 ">
    <div class="mt16 grid gs8 gsy fw-wrap jc-end ai-start pt4">
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            

<div class="post-menu">
<a href="/q/5083682"
   rel="nofollow"
   itemprop="url"
   class="js-share-link js-gps-track"
   title="short permalink to this question"
   data-gps-track="post.click({ item: 2, priv: 0, post_type: 1 })"
   data-controller="se-share-sheet"
   data-se-share-sheet-title="Share a link to this question"
   data-se-share-sheet-subtitle=""
   data-se-share-sheet-post-type="question"
   data-se-share-sheet-social="facebook twitter devto"
   data-se-share-sheet-location="1"
   data-se-share-sheet-license-url="https%3a%2f%2fcreativecommons.org%2flicenses%2fby-sa%2f4.0%2f"
   data-se-share-sheet-license-name="CC BY-SA 4.0"
   data-s-popover-placement="bottom-start">share</a>
    <span class="lsep">|</span>
            <a href="/posts/5083682/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 1 })" title="">improve this question</a>
    <span class="lsep">|</span>
<button id="btnFollowPost-5083682" class="s-btn s-btn__link fc-black-400 h:fc-black-700 pb2 js-follow-post js-follow-question js-gps-track" role="button"
        data-gps-track="post.click({ item: 14, priv: 0, post_type: 1 })"
        data-controller="s-tooltip " data-s-tooltip-placement="bottom"
        data-s-popover-placement="bottom" aria-controls=""
        title="Follow this question to receive notifications">
    follow
</button>
    <span class="lsep">|</span>
</div>

        </div>

            <div class="post-signature grid--cell">
<div class="user-info ">
<div class="user-action-time">
    <a href="/posts/5083682/revisions" title="show all edits to this post"
                     class="js-gps-track"
                     data-gps-track="post.click({ item: 4, priv: 0, post_type: 1 })">edited <span title="2019-01-16 18:17:33Z" class="relativetime">Jan 16 '19 at 18:17</span></a>
</div>
<div class="user-gravatar32">
    
</div>
<div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
    <span class="d-none" itemprop="name">Craig M</span>
    <div class="-flair">
        
    </div>
</div>
</div>                </div>
        <div class="post-signature owner grid--cell">
            <div class="user-info user-hover">
<div class="user-action-time">
    asked <span title="2011-02-22 20:38:26Z" class="relativetime">Feb 22 '11 at 20:38</span>
</div>
<div class="user-gravatar32">
    <a href="/users/156239/craig-m"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/6ced859e88db62d532e0e763aa24925a?s=32&amp;d=identicon&amp;r=PG" alt="" width="32" height="32" class="bar-sm"></div></a>
</div>
<div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
    <a href="/users/156239/craig-m">Craig M</a><span class="d-none" itemprop="name">Craig M</span>
    <div class="-flair">
        <span class="reputation-score" title="reputation score " dir="ltr">5,412</span><span title="4 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">4</span></span><span class="v-visible-sr">4 gold badges</span><span title="29 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">29</span></span><span class="v-visible-sr">29 silver badges</span><span title="42 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">42</span></span><span class="v-visible-sr">42 bronze badges</span>
    </div>
</div>
</div>

        </div>
    </div>
</div>

</div>




            <div class="post-layout--right">
    <div id="comments-5083682" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="5083682" data-min-length="15">
        <ul class="comments-list js-comments-list"
                data-remaining-comments-count="0"
                data-canpost="false"
                data-cansee="true"
                data-comments-unavailable="false"
                data-addlink-disabled="true">

                    <li id="comment-5695819" class="comment js-comment " data-comment-id="5695819">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
                <span title="number of &#x27;useful comment&#x27; votes received"
                        class="cool">2</span>
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">You can <i>probably</i> figure out what elements to include, but then you&#39;ll have to take that part of the page and use it to build up another page for printing.  <i>That</i> seems like the hard part, in general, especially if there are framework-related container elements around lots of the body for organizational and styling purposes.</span>
            
&ndash;&nbsp;<a href="/users/182668/pointy"
                   title="360,315 reputation"
                   class="comment-user">Pointy</a>
            <span class="comment-date" dir="ltr"><span title="2011-02-22 20:48:25Z, License: CC BY-SA 2.5" class="relativetime-clean">Feb 22 '11 at 20:48</span></span>
        </div>
    </div>
</li>
<li id="comment-5709801" class="comment js-comment " data-comment-id="5709801">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">I don&#39;t think this should be much of a problem actually. The data we&#39;re displaying is laid out fairly simply in block level elements. The only thing we might need to watch out for is partial table selections. Thanks for the heads up though.</span>
            
&ndash;&nbsp;<a href="/users/156239/craig-m"
                   title="5,412 reputation"
                   class="comment-user owner">Craig M</a>
            <span class="comment-date" dir="ltr"><span title="2011-02-23 18:05:36Z, License: CC BY-SA 2.5" class="relativetime-clean">Feb 23 '11 at 18:05</span></span>
        </div>
    </div>
</li>
<li id="comment-49224599" class="comment js-comment " data-comment-id="49224599">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">This is duplicate of <a href="http://stackoverflow.com/questions/5643635/how-to-get-selected-html-text-with-javascript">How to get selected html text with javascript?</a></span>
            
&ndash;&nbsp;<a href="/users/1269037/dan-dascalescu"
                   title="99,426 reputation"
                   class="comment-user">Dan Dascalescu</a>
            <span class="comment-date" dir="ltr"><span title="2015-06-01 15:21:27Z, License: CC BY-SA 3.0" class="relativetime-clean">Jun 1 '15 at 15:21</span></span>
                    <span title="this comment was edited 1 time">
                        <svg aria-hidden="true" class="va-text-bottom o50 svg-icon iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>
                    </span>
        </div>
    </div>
</li>
<li id="comment-49236514" class="comment js-comment " data-comment-id="49236514">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">This question was asked first. The other question is the duplicate.</span>
            
&ndash;&nbsp;<a href="/users/156239/craig-m"
                   title="5,412 reputation"
                   class="comment-user owner">Craig M</a>
            <span class="comment-date" dir="ltr"><span title="2015-06-01 21:12:11Z, License: CC BY-SA 3.0" class="relativetime-clean">Jun 1 '15 at 21:12</span></span>
        </div>
    </div>
</li>

        </ul>
  </div>

    <div id="comments-link-5083682" data-rep=50 data-anon=true>
                <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments."  href="#" role="button">add a comment</a>
            <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
        <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
    </div>         
</div>
</div>
</div>


<div class="js-zone-container zone-container-responsive">
<div id="dfp-isb" class="everyonelovesstackoverflow everyoneloves__inline-sidebar mx-auto"></div>
<div class="js-report-ad-button-container mx-auto" style="width: 300px"></div>
</div>

            <div id="answers">

                <a name="tab-top"></a>
                <div id="answers-header">
                    <div class="answers-subheader grid ai-center mb8">
                        <div class="grid--cell fl1">
                            <h2 class="mb0" data-answercount="3">
                                    3 Answers
                                <span style="display:none;" itemprop="answerCount">3</span>
                            </h2>
                        </div>
                        <div class="grid--cell">
                            <div class=" grid s-btn-group js-filter-btn">
    <a class="grid--cell s-btn s-btn__muted s-btn__outlined" href="/questions/5083682/get-selected-html-in-browser-via-javascript?answertab=active#tab-top" data-nav-xhref="" title="Answers with the latest activity first" data-value="active" data-shortcut="A">
        Active</a>
    <a class="grid--cell s-btn s-btn__muted s-btn__outlined" href="/questions/5083682/get-selected-html-in-browser-via-javascript?answertab=oldest#tab-top" data-nav-xhref="" title="Answers in the order they were provided" data-value="oldest" data-shortcut="O">
        Oldest</a>
    <a class="youarehere is-selected grid--cell s-btn s-btn__muted s-btn__outlined" href="/questions/5083682/get-selected-html-in-browser-via-javascript?answertab=votes#tab-top" data-nav-xhref="" title="Answers with the highest score first" data-value="votes" data-shortcut="V">
        Votes</a>
</div>

                        </div>
                    </div>
                        
                </div>


                                      
<a name="5084044"></a>
<div id="answer-5084044" class="answer accepted-answer" data-answerid="5084044"  itemprop="acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
<div class="post-layout">
    <div class="votecell post-layout--left">
        <div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="5084044">
    <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" title="This answer is useful" aria-pressed="false" aria-label="Up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="m0 svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
    <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="40">40</div>
    <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" title="This answer is not useful" aria-pressed="false" aria-label="Down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="m0 svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>


        <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4" data-s-tooltip-placement="right" title="Loading when this answer was accepted&#x2026;" tabindex="0" role="note" aria-label="Accepted">
            <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
        </div>


    <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py6 mx-auto" href="/posts/5084044/timeline" data-shortcut="T" data-controller="s-tooltip" data-s-tooltip-placement="right" title="Show activity on this post." aria-label="Timeline"><svg aria-hidden="true" class="mln2 mr0 svg-icon iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 113.73 6.77L8.2 14.3A6 6 0 105 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

    </div>

    

<div class="answercell post-layout--right">

<div class="s-prose js-post-body" itemprop="text">
<p>Here is some code I found somewhere but I lost the actual link and this seems to work. </p>

<p><a href="http://jsfiddle.net/Y4BBq/" rel="noreferrer">http://jsfiddle.net/Y4BBq/</a></p>

<pre><code>&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;
&lt;title&gt;The serialized HTML of a selection in Mozilla and IE&lt;/title&gt;
&lt;script type="text/javascript"&gt;
function getHTMLOfSelection () {
  var range;
  if (document.selection &amp;&amp; document.selection.createRange) {
    range = document.selection.createRange();
    return range.htmlText;
  }
  else if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.rangeCount &gt; 0) {
      range = selection.getRangeAt(0);
      var clonedSelection = range.cloneContents();
      var div = document.createElement('div');
      div.appendChild(clonedSelection);
      return div.innerHTML;
    }
    else {
      return '';
    }
  }
  else {
    return '';
  }
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;
    &lt;p&gt;Some text to &lt;span class="test"&gt;test&lt;/span&gt; the selection on.
        Kibology for &lt;b&gt;all&lt;/b&gt;&lt;br /&gt;. All &lt;i&gt;for&lt;/i&gt; Kibology.
&lt;/p&gt;
&lt;/div&gt;
&lt;form action=""&gt;
&lt;p&gt;
&lt;input type="button" value="show HTML of selection"
       onclick="this.form.output.value = getHTMLOfSelection();"&gt;
&lt;/p&gt;
&lt;p&gt;
&lt;textarea name="output" rows="5" cols="80"&gt;&lt;/textarea&gt;
&lt;/p&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<blockquote>
<p><img src="https://i.stack.imgur.com/gjGGD.png" alt="enter image description here"></p>
</blockquote>

<p>There are some issues with the code (I tested with safari) where it doesn't return the exact selection.</p>

<blockquote>
<p><img src="https://i.stack.imgur.com/q5vJq.png" alt="enter image description here">
<img src="https://i.stack.imgur.com/rFMSs.png" alt="enter image description here">
<img src="https://i.stack.imgur.com/M0yf0.png" alt="enter image description here"></p>
</blockquote>
</div>
<div class="mt24">
    <div class="grid fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2011-02-22T21:14:45"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            

<div class="post-menu">
<a href="/a/5084044"
   rel="nofollow"
   itemprop="url"
   class="js-share-link js-gps-track"
   title="short permalink to this answer"
   data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
   data-controller="se-share-sheet"
   data-se-share-sheet-title="Share a link to this answer"
   data-se-share-sheet-subtitle=""
   data-se-share-sheet-post-type="answer"
   data-se-share-sheet-social="facebook twitter devto"
   data-se-share-sheet-location="2"
   data-se-share-sheet-license-url="https%3a%2f%2fcreativecommons.org%2flicenses%2fby-sa%2f2.5%2f"
   data-se-share-sheet-license-name="CC BY-SA 2.5"
   data-s-popover-placement="bottom-start">share</a>
    <span class="lsep">|</span>
            <a href="/posts/5084044/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a>
    <span class="lsep">|</span>
<button id="btnFollowPost-5084044" class="s-btn s-btn__link fc-black-400 h:fc-black-700 pb2 js-follow-post js-follow-answer js-gps-track" role="button"
        data-gps-track="post.click({ item: 14, priv: 0, post_type: 2 })"
        data-controller="s-tooltip " data-s-tooltip-placement="bottom"
        data-s-popover-placement="bottom" aria-controls=""
        title="Follow this answer to receive notifications">
    follow
</button>
    <span class="lsep">|</span>
</div>

        </div>
        <div class="post-signature grid--cell fl0">
<div class="user-info ">
<div class="user-action-time">
    <a href="/posts/5084044/revisions" title="show all edits to this post"
                     class="js-gps-track"
                     data-gps-track="post.click({ item: 4, priv: 0, post_type: 2 })">edited <span title="2011-02-22 21:25:06Z" class="relativetime">Feb 22 '11 at 21:25</span></a>
</div>
<div class="user-gravatar32">
    
</div>
<div class="user-details">
    
    <div class="-flair">
        
    </div>
</div>
</div>            </div>


        <div class="post-signature grid--cell fl0">
            <div class="user-info user-hover">
<div class="user-action-time">
    answered <span title="2011-02-22 21:14:45Z" class="relativetime">Feb 22 '11 at 21:14</span>
</div>
<div class="user-gravatar32">
    <a href="/users/584634/stofke"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/0e0cc3fafcbd772b65ebc60a57af822f?s=32&amp;d=identicon&amp;r=PG" alt="" width="32" height="32" class="bar-sm"></div></a>
</div>
<div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
    <a href="/users/584634/stofke">Stofke</a><span class="d-none" itemprop="name">Stofke</span>
    <div class="-flair">
        <span class="reputation-score" title="reputation score " dir="ltr">2,594</span><span title="2 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">2</span></span><span class="v-visible-sr">2 gold badges</span><span title="17 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">17</span></span><span class="v-visible-sr">17 silver badges</span><span title="28 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">28</span></span><span class="v-visible-sr">28 bronze badges</span>
    </div>
</div>
</div>

        </div>
    </div>
</div>

</div>




            <div class="post-layout--right">
    <div id="comments-5084044" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="5084044" data-min-length="15">
        <ul class="comments-list js-comments-list"
                data-remaining-comments-count="1"
                data-canpost="false"
                data-cansee="true"
                data-comments-unavailable="false"
                data-addlink-disabled="true">

                    <li id="comment-5698649" class="comment js-comment " data-comment-id="5698649">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
                <span title="number of &#x27;useful comment&#x27; votes received"
                        class="cool">1</span>
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">The problems are due to shortcomings in WebKit rather than the code itself.</span>
            
&ndash;&nbsp;<a href="/users/96100/tim-down"
                   title="282,604 reputation"
                   class="comment-user">Tim Down</a>
            <span class="comment-date" dir="ltr"><span title="2011-02-23 01:12:33Z, License: CC BY-SA 2.5" class="relativetime-clean">Feb 23 '11 at 1:12</span></span>
        </div>
    </div>
</li>
<li id="comment-5714445" class="comment js-comment " data-comment-id="5714445">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">Thanks Tim for clarifying this</span>
            
&ndash;&nbsp;<a href="/users/584634/stofke"
                   title="2,594 reputation"
                   class="comment-user">Stofke</a>
            <span class="comment-date" dir="ltr"><span title="2011-02-23 23:01:54Z, License: CC BY-SA 2.5" class="relativetime-clean">Feb 23 '11 at 23:01</span></span>
        </div>
    </div>
</li>
<li id="comment-5878768" class="comment js-comment " data-comment-id="5878768">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">I ended up going with a plugin called Rangy to do this, but this code did the trick too. So, I&#39;m giving you the credit for the answer in case anyone else looking for this answer doesn&#39;t want to use Rangy.</span>
            
&ndash;&nbsp;<a href="/users/156239/craig-m"
                   title="5,412 reputation"
                   class="comment-user owner">Craig M</a>
            <span class="comment-date" dir="ltr"><span title="2011-03-07 20:49:30Z, License: CC BY-SA 2.5" class="relativetime-clean">Mar 7 '11 at 20:49</span></span>
        </div>
    </div>
</li>
<li id="comment-35940935" class="comment js-comment " data-comment-id="35940935">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">@TimDown: &quot;shortcomings in WebKit&quot;. It seems that even Shorty cannot handle this crossbrowser way. I tested at <a href="http://rangy.googlecode.com/svn/trunk/demos/core.html" rel="nofollow noreferrer">rangy.googlecode.com/svn/trunk/demos/core.html</a> in Chrome. When I select &lt;b&gt;Association football&lt;/b&gt;, only the inner text is got, when I press Get HTML. But if I select the next space also, then the full b-block is selected in Chrome. Do you know how this could be done programmatically: Expand selection by one character -&gt; Get HTML -&gt; contract selection back?</span>
            
&ndash;&nbsp;<a href="/users/1691517/timo-k%c3%a4hk%c3%b6nen"
                   title="10,549 reputation"
                   class="comment-user">Timo K&#xE4;hk&#xF6;nen</a>
            <span class="comment-date" dir="ltr"><span title="2014-05-03 17:29:31Z, License: CC BY-SA 3.0" class="relativetime-clean">May 3 '14 at 17:29</span></span>
        </div>
    </div>
</li>
<li id="comment-93062852" class="comment js-comment " data-comment-id="93062852">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
                <span title="number of &#x27;useful comment&#x27; votes received"
                        class="cool">1</span>
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">The issue here isn&#39;t WebKit; it&#39;s that there&#39;s no way to know that ancestor tags are significant. Consider the (extreme) case where the entire document is wrapped in a <code>&lt;b&gt;</code> tag -- the selection would be entirely contained within that <code>&lt;b&gt;</code> tag, so you&#39;d have to traverse all the way up the document in order to apply correct formatting. The selection APIs only look back to the lowest common ancestor. One potential solution would be to traverse up the tree to apply &quot;significant&quot; tags. See modified example: <a href="http://jsfiddle.net/x5uj1zet/" rel="nofollow noreferrer">jsfiddle.net/x5uj1zet</a></span>
            
&ndash;&nbsp;<a href="/users/1385269/ryan-kennedy"
                   title="2,795 reputation"
                   class="comment-user">Ryan Kennedy</a>
            <span class="comment-date" dir="ltr"><span title="2018-10-31 12:13:11Z, License: CC BY-SA 4.0" class="relativetime-clean">Oct 31 '18 at 12:13</span></span>
        </div>
    </div>
</li>

        </ul>
  </div>

    <div id="comments-link-5084044" data-rep=50 data-anon=true>
                <a class="js-add-link comments-link dno" title="Use comments to ask for more information or suggest improvements. Avoid comments like &#x201C;&#x2B;1&#x201D; or &#x201C;thanks&#x201D;."  href="#" role="button"></a>
            <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
        <a class="js-show-link comments-link " title="expand to show all comments on this post" href=# onclick="" role="button">show <b>1</b> more comment</a>
    </div>         
</div>
</div>
</div>

<div class="js-zone-container zone-container-main">
<div id="dfp-mlb" class="everyonelovesstackoverflow everyoneloves__mid-leaderboard everyoneloves__leaderboard"></div>
<div class="js-report-ad-button-container " style="width: 728px"></div>
</div>
                                      
<a name="5084441"></a>
<div id="answer-5084441" class="answer" data-answerid="5084441"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
<div class="post-layout">
    <div class="votecell post-layout--left">
        <div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="5084441">
    <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" title="This answer is useful" aria-pressed="false" aria-label="Up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="m0 svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
    <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="8">8</div>
    <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" title="This answer is not useful" aria-pressed="false" aria-label="Down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="m0 svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>


        <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" data-s-tooltip-placement="right" title="Loading when this answer was accepted&#x2026;" tabindex="0" role="note" aria-label="Accepted">
            <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
        </div>


    <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py6 mx-auto" href="/posts/5084441/timeline" data-shortcut="T" data-controller="s-tooltip" data-s-tooltip-placement="right" title="Show activity on this post." aria-label="Timeline"><svg aria-hidden="true" class="mln2 mr0 svg-icon iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 113.73 6.77L8.2 14.3A6 6 0 105 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

    </div>

    

<div class="answercell post-layout--right">

<div class="s-prose js-post-body" itemprop="text">
<p>Similar code with the same issues as the other implementation</p>

<p><a href="http://snipplr.com/view/10912/get-html-of-selection/" rel="noreferrer">http://snipplr.com/view/10912/get-html-of-selection/</a></p>

<p><a href="http://jsfiddle.net/hwzqP/" rel="noreferrer">http://jsfiddle.net/hwzqP/</a></p>

<pre><code>getSelectionHTML = function () {
  var userSelection;
  if (window.getSelection) {
    // W3C Ranges
    userSelection = window.getSelection ();
    // Get the range:
    if (userSelection.getRangeAt)
      var range = userSelection.getRangeAt (0);
    else {
      var range = document.createRange ();
      range.setStart (userSelection.anchorNode, userSelection.anchorOffset);
      range.setEnd (userSelection.focusNode, userSelection.focusOffset);
    }
    // And the HTML:
    var clonedSelection = range.cloneContents ();
    var div = document.createElement ('div');
    div.appendChild (clonedSelection);
    return div.innerHTML;
  } else if (document.selection) {
    // Explorer selection, return the HTML
    userSelection = document.selection.createRange ();
    return userSelection.htmlText;
  } else {
    return '';
  }
};
</code></pre>
</div>
<div class="mt24">
    <div class="grid fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2011-02-22T21:53:21"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            

<div class="post-menu">
<a href="/a/5084441"
   rel="nofollow"
   itemprop="url"
   class="js-share-link js-gps-track"
   title="short permalink to this answer"
   data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
   data-controller="se-share-sheet"
   data-se-share-sheet-title="Share a link to this answer"
   data-se-share-sheet-subtitle=""
   data-se-share-sheet-post-type="answer"
   data-se-share-sheet-social="facebook twitter devto"
   data-se-share-sheet-location="2"
   data-se-share-sheet-license-url="https%3a%2f%2fcreativecommons.org%2flicenses%2fby-sa%2f2.5%2f"
   data-se-share-sheet-license-name="CC BY-SA 2.5"
   data-s-popover-placement="bottom-start">share</a>
    <span class="lsep">|</span>
            <a href="/posts/5084441/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a>
    <span class="lsep">|</span>
<button id="btnFollowPost-5084441" class="s-btn s-btn__link fc-black-400 h:fc-black-700 pb2 js-follow-post js-follow-answer js-gps-track" role="button"
        data-gps-track="post.click({ item: 14, priv: 0, post_type: 2 })"
        data-controller="s-tooltip " data-s-tooltip-placement="bottom"
        data-s-popover-placement="bottom" aria-controls=""
        title="Follow this answer to receive notifications">
    follow
</button>
    <span class="lsep">|</span>
</div>

        </div>


        <div class="post-signature grid--cell fl0">
            <div class="user-info user-hover">
<div class="user-action-time">
    answered <span title="2011-02-22 21:53:21Z" class="relativetime">Feb 22 '11 at 21:53</span>
</div>
<div class="user-gravatar32">
    <a href="/users/584634/stofke"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/0e0cc3fafcbd772b65ebc60a57af822f?s=32&amp;d=identicon&amp;r=PG" alt="" width="32" height="32" class="bar-sm"></div></a>
</div>
<div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
    <a href="/users/584634/stofke">Stofke</a><span class="d-none" itemprop="name">Stofke</span>
    <div class="-flair">
        <span class="reputation-score" title="reputation score " dir="ltr">2,594</span><span title="2 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">2</span></span><span class="v-visible-sr">2 gold badges</span><span title="17 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">17</span></span><span class="v-visible-sr">17 silver badges</span><span title="28 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">28</span></span><span class="v-visible-sr">28 bronze badges</span>
    </div>
</div>
</div>

        </div>
    </div>
</div>

</div>




            <div class="post-layout--right">
    <div id="comments-5084441" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="5084441" data-min-length="15">
        <ul class="comments-list js-comments-list"
                data-remaining-comments-count="0"
                data-canpost="false"
                data-cansee="true"
                data-comments-unavailable="false"
                data-addlink-disabled="true">

                    <li id="comment-89829682" class="comment js-comment " data-comment-id="89829682">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">it throws err <code>Failed to execute &#39;getRangeAt&#39; on &#39;Selection&#39;: 0 is not a valid index.</code> if nothing selected, you should check on the <code>rangeCount</code>.</span>
            
&ndash;&nbsp;<a href="/users/260793/greatghoul"
                   title="1,138 reputation"
                   class="comment-user">greatghoul</a>
            <span class="comment-date" dir="ltr"><span title="2018-07-19 18:10:26Z, License: CC BY-SA 4.0" class="relativetime-clean">Jul 19 '18 at 18:10</span></span>
        </div>
    </div>
</li>

        </ul>
  </div>

    <div id="comments-link-5084441" data-rep=50 data-anon=true>
                <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like &#x201C;&#x2B;1&#x201D; or &#x201C;thanks&#x201D;."  href="#" role="button">add a comment</a>
            <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
        <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
    </div>         
</div>
</div>
</div>

                                      
<a name="5084001"></a>
<div id="answer-5084001" class="answer" data-answerid="5084001"  itemprop="suggestedAnswer" itemscope itemtype="http://schema.org/Answer">
<div class="post-layout">
    <div class="votecell post-layout--left">
        <div class="js-voting-container grid fd-column ai-stretch gs4 fc-black-200" data-post-id="5084001">
    <button class="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" title="This answer is useful" aria-pressed="false" aria-label="Up vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="m0 svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"/></svg></button>
    <div class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemprop="upvoteCount" data-value="2">2</div>
    <button class="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" title="This answer is not useful" aria-pressed="false" aria-label="Down vote" data-selected-classes="fc-theme-primary"><svg aria-hidden="true" class="m0 svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"/></svg></button>


        <div class="js-accepted-answer-indicator grid--cell fc-green-500 ta-center py4 d-none" data-s-tooltip-placement="right" title="Loading when this answer was accepted&#x2026;" tabindex="0" role="note" aria-label="Accepted">
            <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"/></svg>
        </div>


    <a class="js-post-issue grid--cell s-btn s-btn__unset c-pointer py6 mx-auto" href="/posts/5084001/timeline" data-shortcut="T" data-controller="s-tooltip" data-s-tooltip-placement="right" title="Show activity on this post." aria-label="Timeline"><svg aria-hidden="true" class="mln2 mr0 svg-icon iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 113.73 6.77L8.2 14.3A6 6 0 105 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/></svg></a>

</div>

    </div>

    

<div class="answercell post-layout--right">

<div class="s-prose js-post-body" itemprop="text">
<p>I haven't read the source of this extension/bookmarklet, but I've tried it and it seems to work. You might find your answer in here:</p>

<p><a href="http://blog.webkitchen.cz/view-selection-source-chrome-extension" rel="nofollow">http://blog.webkitchen.cz/view-selection-source-chrome-extension</a></p>
</div>
<div class="mt24">
    <div class="grid fw-wrap ai-start jc-end gs8 gsy">
        <time itemprop="dateCreated" datetime="2011-02-22T21:10:41"></time>
        <div class="grid--cell mr16" style="flex: 1 1 100px;">
            

<div class="post-menu">
<a href="/a/5084001"
   rel="nofollow"
   itemprop="url"
   class="js-share-link js-gps-track"
   title="short permalink to this answer"
   data-gps-track="post.click({ item: 2, priv: 0, post_type: 2 })"
   data-controller="se-share-sheet"
   data-se-share-sheet-title="Share a link to this answer"
   data-se-share-sheet-subtitle=""
   data-se-share-sheet-post-type="answer"
   data-se-share-sheet-social="facebook twitter devto"
   data-se-share-sheet-location="2"
   data-se-share-sheet-license-url="https%3a%2f%2fcreativecommons.org%2flicenses%2fby-sa%2f2.5%2f"
   data-se-share-sheet-license-name="CC BY-SA 2.5"
   data-s-popover-placement="bottom-start">share</a>
    <span class="lsep">|</span>
            <a href="/posts/5084001/edit" class="suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 2 })" title="">improve this answer</a>
    <span class="lsep">|</span>
<button id="btnFollowPost-5084001" class="s-btn s-btn__link fc-black-400 h:fc-black-700 pb2 js-follow-post js-follow-answer js-gps-track" role="button"
        data-gps-track="post.click({ item: 14, priv: 0, post_type: 2 })"
        data-controller="s-tooltip " data-s-tooltip-placement="bottom"
        data-s-popover-placement="bottom" aria-controls=""
        title="Follow this answer to receive notifications">
    follow
</button>
    <span class="lsep">|</span>
</div>

        </div>


        <div class="post-signature grid--cell fl0">
            <div class="user-info ">
<div class="user-action-time">
    answered <span title="2011-02-22 21:10:41Z" class="relativetime">Feb 22 '11 at 21:10</span>
</div>
<div class="user-gravatar32">
    <a href="/users/592746/wayne"><div class="gravatar-wrapper-32"><img src="https://www.gravatar.com/avatar/5e2139c4e5d44f7f2219dc936ae4a298?s=32&amp;d=identicon&amp;r=PG" alt="" width="32" height="32" class="bar-sm"></div></a>
</div>
<div class="user-details" itemprop="author" itemscope itemtype="http://schema.org/Person">
    <a href="/users/592746/wayne">Wayne</a><span class="d-none" itemprop="name">Wayne</span>
    <div class="-flair">
        <span class="reputation-score" title="reputation score 55,349" dir="ltr">55.3k</span><span title="13 gold badges" aria-hidden="true"><span class="badge1"></span><span class="badgecount">13</span></span><span class="v-visible-sr">13 gold badges</span><span title="120 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">120</span></span><span class="v-visible-sr">120 silver badges</span><span title="118 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">118</span></span><span class="v-visible-sr">118 bronze badges</span>
    </div>
</div>
</div>

        </div>
    </div>
</div>

</div>




            <div class="post-layout--right">
    <div id="comments-5084001" class="comments js-comments-container bt bc-black-2 mt12 " data-post-id="5084001" data-min-length="15">
        <ul class="comments-list js-comments-list"
                data-remaining-comments-count="0"
                data-canpost="false"
                data-cansee="true"
                data-comments-unavailable="false"
                data-addlink-disabled="true">

                    <li id="comment-5696367" class="comment js-comment " data-comment-id="5696367">
    <div class="js-comment-actions comment-actions">
        <div class="comment-score js-comment-edit-hide">
        </div>
    </div>
    <div class="comment-text js-comment-text-and-form">
        <div class="comment-body js-comment-edit-hide">
            
            <span class="comment-copy">If you don&#39;t mind getting a popup with the source this would probably be the best method in terms of reliability</span>
            
&ndash;&nbsp;<a href="/users/584634/stofke"
                   title="2,594 reputation"
                   class="comment-user">Stofke</a>
            <span class="comment-date" dir="ltr"><span title="2011-02-22 21:32:45Z, License: CC BY-SA 2.5" class="relativetime-clean">Feb 22 '11 at 21:32</span></span>
        </div>
    </div>
</li>

        </ul>
  </div>

    <div id="comments-link-5084001" data-rep=50 data-anon=true>
                <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid comments like &#x201C;&#x2B;1&#x201D; or &#x201C;thanks&#x201D;."  href="#" role="button">add a comment</a>
            <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
        <a class="js-show-link comments-link dno" title="expand to show all comments on this post" href=# onclick="" role="button"></a>
    </div>         
</div>
</div>
</div>


                    <a name='new-answer'></a>
                        <form id="post-form" action="/questions/5083682/answer/submit" method="post" class="js-add-answer-component post-form">
                            <input type="hidden" id="post-id" value="5083682" />
                            <input type="hidden" id="qualityBanWarningShown" name="qualityBanWarningShown" value="false" />
                            <input type="hidden" name="referrer" value="" />
                            <h2 class="space">
                                Your Answer
                            </h2>
                                

<script>
    StackExchange.ifUsing("editor", function () {
        StackExchange.using("externalEditor", function () {
            StackExchange.using("snippets", function () {
                StackExchange.snippets.init();
            });
        });
    }, "code-snippets");
</script>


<script>
StackExchange.ready(function() {
    var channelOptions = {
        tags: "".split(" "),
        id: "1"
    };
    initTagRenderer("".split(" "), "".split(" "), channelOptions);

    StackExchange.using("externalEditor", function() {
        // Have to fire editor after snippets, if snippets enabled
        if (StackExchange.settings.snippets.snippetsEnabled) {
            StackExchange.using("snippets", function() {
                createEditor();
            });
        }
        else {
            createEditor();
        }
    });

    function createEditor() {
        StackExchange.prepareEditor({
            useStacksEditor: false,
            heartbeatType: 'answer',
            autoActivateHeartbeat: false,
            convertImagesToLinks: true,
            noModals: true,
            showLowRepImageUploadWarning: true,
            reputationToPostImages: 10,
            bindNavPrevention: true,
            postfix: "",
            imageUploader: {
                brandingHtml: "Powered by \u003ca href=\"https://imgur.com/\"\u003e\u003csvg class=\"svg-icon\" width=\"50\" height=\"18\" viewBox=\"0 0 50 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\u003e\u003cpath d=\"M46.1709 9.17788C46.1709 8.26454 46.2665 7.94324 47.1084 7.58816C47.4091 7.46349 47.7169 7.36433 48.0099 7.26993C48.9099 6.97997 49.672 6.73443 49.672 5.93063C49.672 5.22043 48.9832 4.61182 48.1414 4.61182C47.4335 4.61182 46.7256 4.91628 46.0943 5.50789C45.7307 4.9328 45.2525 4.66231 44.6595 4.66231C43.6264 4.66231 43.1481 5.28821 43.1481 6.59048V11.9512C43.1481 13.2535 43.6264 13.8962 44.6595 13.8962C45.6924 13.8962 46.1709 13.2535 46.1709 11.9512V9.17788Z\"/\u003e\u003cpath d=\"M32.492 10.1419C32.492 12.6954 34.1182 14.0484 37.0451 14.0484C39.9723 14.0484 41.5985 12.6954 41.5985 10.1419V6.59049C41.5985 5.28821 41.1394 4.66232 40.1061 4.66232C39.0732 4.66232 38.5948 5.28821 38.5948 6.59049V9.60062C38.5948 10.8521 38.2696 11.5455 37.0451 11.5455C35.8209 11.5455 35.4954 10.8521 35.4954 9.60062V6.59049C35.4954 5.28821 35.0173 4.66232 34.0034 4.66232C32.9703 4.66232 32.492 5.28821 32.492 6.59049V10.1419Z\" /\u003e\u003cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.6622 17.6335C27.8049 17.6335 29.3739 16.9402 30.2537 15.6379C30.8468 14.7755 30.9615 13.5579 30.9615 11.9512V6.59049C30.9615 5.28821 30.4833 4.66231 29.4502 4.66231C28.9913 4.66231 28.4555 4.94978 28.1109 5.50789C27.499 4.86533 26.7335 4.56087 25.7005 4.56087C23.1369 4.56087 21.0134 6.57349 21.0134 9.27932C21.0134 11.9852 23.003 13.913 25.3754 13.913C26.5612 13.913 27.4607 13.4902 28.1109 12.6616C28.1109 12.7229 28.1161 12.7799 28.121 12.8346C28.1256 12.8854 28.1301 12.9342 28.1301 12.983C28.1301 14.4373 27.2502 15.2321 25.777 15.2321C24.8349 15.2321 24.1352 14.9821 23.5661 14.7787C23.176 14.6393 22.8472 14.5218 22.5437 14.5218C21.7977 14.5218 21.2429 15.0123 21.2429 15.6887C21.2429 16.7375 22.9072 17.6335 25.6622 17.6335ZM24.1317 9.27932C24.1317 7.94324 24.9928 7.09766 26.1024 7.09766C27.2119 7.09766 28.0918 7.94324 28.0918 9.27932C28.0918 10.6321 27.2311 11.5116 26.1024 11.5116C24.9737 11.5116 24.1317 10.6491 24.1317 9.27932Z\"/\u003e\u003cpath d=\"M16.8045 11.9512C16.8045 13.2535 17.2637 13.8962 18.2965 13.8962C19.3298 13.8962 19.8079 13.2535 19.8079 11.9512V8.12928C19.8079 5.82936 18.4879 4.62866 16.4027 4.62866C15.1594 4.62866 14.279 4.98375 13.3609 5.88013C12.653 5.05154 11.6581 4.62866 10.3573 4.62866C9.34336 4.62866 8.57809 4.89931 7.9466 5.5079C7.58314 4.9328 7.10506 4.66232 6.51203 4.66232C5.47873 4.66232 5.00066 5.28821 5.00066 6.59049V11.9512C5.00066 13.2535 5.47873 13.8962 6.51203 13.8962C7.54479 13.8962 8.0232 13.2535 8.0232 11.9512V8.90741C8.0232 7.58817 8.44431 6.91179 9.53458 6.91179C10.5104 6.91179 10.893 7.58817 10.893 8.94108V11.9512C10.893 13.2535 11.3711 13.8962 12.4044 13.8962C13.4375 13.8962 13.9157 13.2535 13.9157 11.9512V8.90741C13.9157 7.58817 14.3365 6.91179 15.4269 6.91179C16.4027 6.91179 16.8045 7.58817 16.8045 8.94108V11.9512Z\"/\u003e\u003cpath d=\"M3.31675 6.59049C3.31675 5.28821 2.83866 4.66232 1.82471 4.66232C0.791758 4.66232 0.313354 5.28821 0.313354 6.59049V11.9512C0.313354 13.2535 0.791758 13.8962 1.82471 13.8962C2.85798 13.8962 3.31675 13.2535 3.31675 11.9512V6.59049Z\" /\u003e\u003cpath d=\"M1.87209 0.400291C0.843612 0.400291 0 1.1159 0 1.98861C0 2.87869 0.822846 3.57676 1.87209 3.57676C2.90056 3.57676 3.7234 2.87869 3.7234 1.98861C3.7234 1.1159 2.90056 0.400291 1.87209 0.400291Z\" fill=\"#1BB76E\"/\u003e\u003c/svg\u003e\u003c/a\u003e",
                contentPolicyHtml: "User contributions licensed under \u003ca href=\"https://stackoverflow.com/help/licensing\"\u003ecc by-sa\u003c/a\u003e \u003ca href=\"https://stackoverflow.com/legal/content-policy\"\u003e(content policy)\u003c/a\u003e",
                allowUrls: true
            },
            onDemand: true,
            discardSelector: ".discard-answer"
            ,immediatelyShowMarkdownHelp:true,enableSnippets:true
        });
                }
});
</script>
<div id="post-editor" class="post-editor js-post-editor">


    <div class="ps-relative">
        <div class="wmd-container mb8">
            <div id="wmd-button-bar" class="wmd-button-bar btr-sm"></div>
            <div class="js-stacks-validation">
                <div class="ps-relative">
                    <textarea id="wmd-input"
                              name="post-text"
                              class="wmd-input s-input bar0 js-post-body-field"
                              data-post-type-id="2"
                              cols="92" rows="15"
                              tabindex="101"
                              data-min-length=""></textarea>
                </div>
                <div class="s-input-message mt4 d-none js-stacks-validation-message"></div>
            </div>
        </div>
    </div>

<aside class="grid ai-start jc-space-between js-answer-help s-notice s-notice__warning pb0 pr4 pt4 mb8 d-none" role="status" aria-hidden="true">
<div class="grid--cell pt8">
    <p>Thanks for contributing an answer to Stack Overflow!</p><ul><li>Please be sure to <em>answer the question</em>. Provide details and share your research!</li></ul><p>But <em>avoid</em> …</p><ul><li>Asking for help, clarification, or responding to other answers.</li><li>Making statements based on opinion; back them up with references or personal experience.</li></ul><p>To learn more, see our <a href="/help/how-to-answer">tips on writing great answers</a>.</p>
</div>
<button class="grid--cell js-answer-help-close-btn s-btn s-btn__muted fc-dark">
    <svg aria-hidden="true" class="svg-icon iconClear" width="18" height="18" viewBox="0 0 18 18"><path d="M15 4.41L13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41z"/></svg>
</button>
</aside>



<div>
    <div id="draft-saved" class="fc-success h24" style="display:none;">Draft saved</div>
    <div id="draft-discarded" class="fc-error h24" style="display:none;">Draft discarded</div>
</div>


        <div id="wmd-preview" class="s-prose mb16 wmd-preview js-wmd-preview"></div>
        <div></div>

    <div class="edit-block">
        <input id="fkey" name="fkey" type="hidden" value="8033fd8f61b17b5b17c2f10ad83d32c8753909df742c5ea0a0132381b90173d6">
        <input id="author" name="author" type="text">
    </div>

</div>


                            <div class="ps-relative">
                                            <div class="form-item dno new-post-login p0 my16">
            <div class="grid gs16 md:fd-column new-login-form">
                <div class="grid fd-column w50 md:w-auto gsy gs8 jc-space-between new-login-left">
                    <h3 class="grid--cell fs-title">Sign up or <a id="login-link" href="/users/login?ssrc=question_page&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2f5083682%2fget-selected-html-in-browser-via-javascript%23new-answer">log in</a></h3>
                    <script>
                        StackExchange.ready(function () {
                            StackExchange.helpers.onClickDraftSave('#login-link');
                        });
                    </script>
                    <div class="grid--cell s-btn s-btn__muted s-btn__outlined s-btn__icon google-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;New Post&quot;,null,null]">
                        <svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"/><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853"/><path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05"/><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z" fill="#EA4335"/></svg> Sign up using Google
                    </div>
                    <div class="grid--cell s-btn s-btn__muted s-btn__icon facebook-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Facebook&quot;,&quot;New Post&quot;,null,null]">
                        <svg aria-hidden="true" class="svg-icon iconFacebook" width="18" height="18" viewBox="0 0 18 18"><path d="M3 1a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z" fill="#4167B2"/></svg> Sign up using Facebook
                    </div>
                    <div class="grid--cell s-btn s-btn__muted s-btn__outlined s-btn__icon stackexchange-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Navigation&quot;,&quot;New Post&quot;,null,null]">
                        <svg aria-hidden="true" class="native svg-icon iconLogoGlyphXSm" width="18" height="18" viewBox="0 0 18 18"><path d="M14 16v-5h2v7H2v-7h2v5h10z" fill="#BCBBBB"/><path d="M12.09.72l-1.21.9 4.5 6.07 1.22-.9L12.09.71zM5 15h8v-2H5v2zm9.15-5.87L8.35 4.3l.96-1.16 5.8 4.83-.96 1.16zm-7.7-1.47l6.85 3.19.63-1.37-6.85-3.2-.63 1.38zm6.53 5L5.4 11.39l.38-1.67 7.42 1.48-.22 1.46z" fill="#F48024"/></svg> Sign up using Email and Password
                    </div>
                </div>
                <input type="hidden" name="use-facebook" class="use-facebook" value="false" />
                <input type="hidden" name="use-google" class="use-google" value="false" />
                <button type="button" class="d-none js-submit-openid">Submit</button>
                <div class="grid gsy gs8 fd-column w50 md:w-auto new-login-right form-item p0">
                            <h3 class="grid--cell fs-title">Post as a guest</h3>
        <div class="grid--cell">
            <div class="grid gs4 gsy fd-column">
                <label class="s-label" for="display-name">Name</label>
                <div class="grid ps-relative">
                    <input class="s-input" id="display-name" name="display-name" maxlength="30" type="text" value="" tabindex="105" placeholder="" />
                </div>
            </div>
        </div>
        <div class="grid--cell">
            <div class="grid gs4 gsy fd-column">
                <div class="grid--cell">
                    <div class="grid gs2 gsy fd-column">
                        <label class="grid--cell s-label" for="m-address">Email</label>
                        <p class="grid--cell s-description">Required, but never shown</p>
                    </div>
                </div>
                <div class="grid ps-relative">
                    <input class="s-input js-post-email-field" id="m-address" name="m-address" type="text" value="" size="40" tabindex="106" placeholder="" />
                </div>
            </div>
        </div>

                </div>
            </div>
        </div>
        <script>
            StackExchange.ready(
                function () {
                    StackExchange.openid.initPostLogin('.new-post-login', 'https%3a%2f%2fstackoverflow.com%2fquestions%2f5083682%2fget-selected-html-in-browser-via-javascript%23new-answer', 'question_page');
                }
            );
        </script>
        <noscript>
                    <h3 class="grid--cell fs-title">Post as a guest</h3>
        <div class="grid--cell">
            <div class="grid gs4 gsy fd-column">
                <label class="s-label" for="display-name">Name</label>
                <div class="grid ps-relative">
                    <input class="s-input" id="display-name" name="display-name" maxlength="30" type="text" value="" tabindex="105" placeholder="" />
                </div>
            </div>
        </div>
        <div class="grid--cell">
            <div class="grid gs4 gsy fd-column">
                <div class="grid--cell">
                    <div class="grid gs2 gsy fd-column">
                        <label class="grid--cell s-label" for="m-address">Email</label>
                        <p class="grid--cell s-description">Required, but never shown</p>
                    </div>
                </div>
                <div class="grid ps-relative">
                    <input class="s-input js-post-email-field" id="m-address" name="m-address" type="text" value="" size="40" tabindex="106" placeholder="" />
                </div>
            </div>
        </div>

        </noscript>

                            </div>

                                <div class="form-submit cbt grid gsx gs4">
                                    <button id="submit-button" class="grid--cell s-btn s-btn__primary s-btn__icon" type="submit" tabindex="120" autocomplete="off">
Post Your Answer                                        </button>
                                    <button class="grid--cell s-btn s-btn__danger discard-answer dno">
                                        Discard
                                    </button>
                                        <p class="privacy-policy-agreement">
                                            By clicking “Post Your Answer”, you agree to our <a href='https://stackoverflow.com/legal/terms-of-service/public' name='tos' target='_blank' class='-link'>terms of service</a>, <a href='https://stackoverflow.com/legal/privacy-policy' name='privacy' target='_blank' class='-link'>privacy policy</a> and <a href='https://stackoverflow.com/legal/cookie-policy' name='cookie' target='_blank' class='-link'>cookie policy</a><input type="hidden" name="legalLinksShown" value="1" />
                                        </p>
                                </div>
                                <div class="js-general-error general-error cbt d-none"></div>
                        </form>



                        <h2 class="bottom-notice" data-loc="1">
Not the answer you&#x27;re looking for? Browse other questions tagged <a href="/questions/tagged/javascript" class="post-tag" title="show questions tagged &#39;javascript&#39;" rel="tag">javascript</a>  or <a href="/questions/ask">ask your own question</a>.                            </h2>
            </div>
        </div>
        <div id="sidebar" class="show-votes" role="complementary" aria-label="sidebar">
            
<div class="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16" data-tracker="cb=1">
<ul class="d-block p0 m0">
                <div class="s-sidebarwidget--header s-sidebarwidget__small-bold-text fc-light d:fc-black-900 bb bbw1">
                    The Overflow Blog
                </div>
    <li class="s-sidebarwidget--item grid px16">
        <div class="grid--cell1 fl-shrink0">
<svg aria-hidden="true" class="va-text-top svg-icon iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>            </div>
        <div class="grid--cell">
            <a href="https://stackoverflow.blog/2020/10/20/podcast-279-kubernetes-kelsey-hightower/" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2020/10/20/podcast-279-kubernetes-kelsey-hightower/&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 1, position: 0 })">Podcast 279: Making Kubernetes work like it’s 1999 with Kelsey Hightower</a>
        </div>
    </li>
    <li class="s-sidebarwidget--item grid px16">
        <div class="grid--cell1 fl-shrink0">
<svg aria-hidden="true" class="va-text-top svg-icon iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>            </div>
        <div class="grid--cell">
            <a href="https://stackoverflow.blog/2020/10/19/remote-work-deliberate-improve-communication-collaboration/" class="js-gps-track" data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2020/10/19/remote-work-deliberate-improve-communication-collaboration/&quot;,null,null]" data-gps-track="communitybulletin.click({ priority: 1, position: 1 })">How to communicate more deliberately and efficiently when working remotely</a>
        </div>
    </li>
</ul>
</div>


                <div class="js-sidebar-zone" style="min-height: 735px;">
                    <div class="js-zone-container zone-container-sidebar">
<div id="dfp-tsb" class="everyonelovesstackoverflow everyoneloves__top-sidebar"></div>
<div class="js-report-ad-button-container " style="width: 300px"></div>
</div>

                    <div class="js-zone-container zone-container-sidebar">
<div id="dfp-msb" class="everyonelovesstackoverflow everyoneloves__mid-sidebar"></div>
<div class="js-report-ad-button-container " style="width: 300px"></div>
</div>

                    <div id="hireme"></div>
                </div>

                <div class="module sidebar-linked">
<h4 id="h-linked">Linked</h4>
<div class="linked" data-tracker="lq=1">
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 36471770, position: 0 })">
    <a href="/q/36471770" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes  default">2</div>
    </a>
    <a href="/questions/36471770/get-selected-text-including-html-tags?noredirect=1" class="question-hyperlink">Get selected text including HTML tags</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 52733412, position: 1 })">
    <a href="/q/52733412" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes  default">0</div>
    </a>
    <a href="/questions/52733412/javascript-how-to-obtain-the-tags-of-getselection-along-multiple-tags?noredirect=1" class="question-hyperlink">Javascript: how to obtain the tags of getSelection along multiple tags?</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 61018074, position: 2 })">
    <a href="/q/61018074" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes  default">0</div>
    </a>
    <a href="/questions/61018074/how-to-get-innertext-of-a-specific-part-range-fragment-of-html-document-i-e?noredirect=1" class="question-hyperlink">How to get innerText of a specific part (range, fragment) of HTML document? (I.e. not of the whole HTML element)</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 5643635, position: 3 })">
    <a href="/q/5643635" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes answered-accepted default">38</div>
    </a>
    <a href="/questions/5643635/how-to-get-selected-html-text-with-javascript?noredirect=1" class="question-hyperlink">How to get selected html text with javascript?</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 12786004, position: 4 })">
    <a href="/q/12786004" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes answered-accepted default">7</div>
    </a>
    <a href="/questions/12786004/how-to-getselectedtext-from-webview-in-javafx?noredirect=1" class="question-hyperlink">How to getSelectedText from webView in javaFX</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 37001408, position: 5 })">
    <a href="/q/37001408" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes  default">10</div>
    </a>
    <a href="/questions/37001408/get-the-html-source-code-of-the-selected-text?noredirect=1" class="question-hyperlink">Get the HTML source code of the selected text?</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 12550538, position: 6 })">
    <a href="/q/12550538" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes  default">2</div>
    </a>
    <a href="/questions/12550538/how-does-google-docs-map-mouse-coordinates-to-text-offset-for-drag-and-drop?noredirect=1" class="question-hyperlink">How does Google Docs map mouse coordinates to text offset (for drag and drop)?</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 46870154, position: 7 })">
    <a href="/q/46870154" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes  default">0</div>
    </a>
    <a href="/questions/46870154/how-to-get-selected-dom-using-javascript-if-selected-text-is-html?noredirect=1" class="question-hyperlink">how to get selected DOM using javascript if selected text is HTML?</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 42298386, position: 8 })">
    <a href="/q/42298386" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes  default">0</div>
    </a>
    <a href="/questions/42298386/select-html-from-iframe-using-javascript-jquery?noredirect=1" class="question-hyperlink">Select HTML from iframe using Javascript / jQuery</a>
  </div>
        <div class="spacer js-gps-track" data-gps-track="linkedquestion.click({ source_post_id: 5083682, target_question_id: 33745667, position: 9 })">
    <a href="/q/33745667" title="Vote score (upvotes - downvotes)">
      <div class="answer-votes  default">0</div>
    </a>
    <a href="/questions/33745667/convert-a-selected-html-table-to-json?noredirect=1" class="question-hyperlink">Convert a selected HTML Table to JSON</a>
  </div>
    <div class="spacer more ml32 pl16 pt8">
            <a href="/questions/linked/5083682">See more linked questions</a>
        </div>
</div>
</div>


                <div class="module sidebar-related">
                    <h4 id="h-related">Related</h4>
                    <div class="related js-gps-related-questions" data-tracker="rq=1">
                            <div class="spacer">
                                <a href="/q/111102" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">7633</div>
                                </a>
                                <a href="/questions/111102/how-do-javascript-closures-work" class="question-hyperlink">How do JavaScript closures work?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/122102" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">5178</div>
                                </a>
                                <a href="/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript" class="question-hyperlink">What is the most efficient way to deep clone an object in JavaScript?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/208105" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">6314</div>
                                </a>
                                <a href="/questions/208105/how-do-i-remove-a-property-from-a-javascript-object" class="question-hyperlink">How do I remove a property from a JavaScript object?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/221294" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">4126</div>
                                </a>
                                <a href="/questions/221294/how-do-you-get-a-timestamp-in-javascript" class="question-hyperlink">How do you get a timestamp in JavaScript?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/359494" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">5662</div>
                                </a>
                                <a href="/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons" class="question-hyperlink">Which equals operator (== vs ===) should be used in JavaScript comparisons?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/950087" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">5369</div>
                                </a>
                                <a href="/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file" class="question-hyperlink">How do I include a JavaScript file in another JavaScript file?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/1034621" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">3107</div>
                                </a>
                                <a href="/questions/1034621/get-the-current-url-with-javascript" class="question-hyperlink">Get the current URL with JavaScript?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/1335851" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">7678</div>
                                </a>
                                <a href="/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it" class="question-hyperlink">What does &ldquo;use strict&rdquo; do in JavaScript, and what is the reasoning behind it?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/1789945" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">7424</div>
                                </a>
                                <a href="/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript" class="question-hyperlink">How to check whether a string contains a substring in JavaScript?</a>
                            </div>
                            <div class="spacer">
                                <a href="/q/9329446" title="Vote score (upvotes - downvotes)">
                                    <div class="answer-votes answered-accepted extra-large">4815</div>
                                </a>
                                <a href="/questions/9329446/for-each-over-an-array-in-javascript" class="question-hyperlink">For-each over an array in JavaScript</a>
                            </div>
                    </div>
                </div>

            <div id="hot-network-questions" class="module tex2jax_ignore">
<h4>
    <a href="https://stackexchange.com/questions?tab=hot"
       class="js-gps-track s-link s-link__inherit" 
       data-gps-track="posts_hot_network.click({ item_type:1, location:11 })">
        Hot Network Questions
    </a>
</h4>
<ul>
        <li >
            <div class="favicon favicon-law" title="Law Stack Exchange"></div><a href="https://law.stackexchange.com/questions/57272/is-it-legal-for-microsoft-to-install-software-without-user-approval" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:617 }); posts_hot_network.click({ item_type:2, location:11 })">
                Is it legal for Microsoft to install software without user approval?
            </a>

        </li>
        <li >
            <div class="favicon favicon-mattermodeling" title="Matter Modeling Stack Exchange"></div><a href="https://mattermodeling.stackexchange.com/questions/3565/does-one-to-one-correspondence-of-hohenberg-kohn-theorem-mean-bijective-or-injec" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:704 }); posts_hot_network.click({ item_type:2, location:11 })">
                Does One-to-One Correspondence of Hohenberg Kohn Theorem Mean Bijective or Injective and How to Prove it?
            </a>

        </li>
        <li >
            <div class="favicon favicon-math" title="Mathematics Stack Exchange"></div><a href="https://math.stackexchange.com/questions/3874603/counting-problem-with-arrangement-of-items" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:69 }); posts_hot_network.click({ item_type:2, location:11 })">
                Counting Problem with Arrangement of Items
            </a>

        </li>
        <li >
            <div class="favicon favicon-opensource" title="Open Source Stack Exchange"></div><a href="https://opensource.stackexchange.com/questions/10583/asserting-copyright-infringement-against-closed-source-software-using-gpl-code" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:619 }); posts_hot_network.click({ item_type:2, location:11 })">
                Asserting copyright infringement against closed source software using GPL code
            </a>

        </li>
        <li >
            <div class="favicon favicon-codereview" title="Code Review Stack Exchange"></div><a href="https://codereview.stackexchange.com/questions/250855/efficiently-find-all-the-pythagorean-triplets-where-all-numbers-less-than-1000" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:196 }); posts_hot_network.click({ item_type:2, location:11 })">
                Efficiently find all the Pythagorean triplets where all numbers less than 1000
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-politics" title="Politics Stack Exchange"></div><a href="https://politics.stackexchange.com/questions/59189/would-the-hypothetical-exxon-call-be-illegal" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:475 }); posts_hot_network.click({ item_type:2, location:11 })">
                Would the hypothetical Exxon call be illegal?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-crypto" title="Cryptography Stack Exchange"></div><a href="https://crypto.stackexchange.com/questions/85670/need-help-understanding-math-behind-rijndael-s-box" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:281 }); posts_hot_network.click({ item_type:2, location:11 })">
                Need help understanding math behind Rijndael S-Box
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-stackoverflow" title="Stack Overflow"></div><a href="https://stackoverflow.com/questions/64448328/is-new-in-new-int-considered-an-operator" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:1 }); posts_hot_network.click({ item_type:2, location:11 })">
                Is \`new\` in \`new int;\` considered an operator?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-puzzling" title="Puzzling Stack Exchange"></div><a href="https://puzzling.stackexchange.com/questions/103999/stepping-stones-1-2-3" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:559 }); posts_hot_network.click({ item_type:2, location:11 })">
                Stepping Stones 1, 2, 3
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-cooking" title="Seasoned Advice"></div><a href="https://cooking.stackexchange.com/questions/112209/are-these-red-beans-or-red-kidney-beans" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:49 }); posts_hot_network.click({ item_type:2, location:11 })">
                Are these Red Beans or Red Kidney beans?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-scifi" title="Science Fiction &amp; Fantasy Stack Exchange"></div><a href="https://scifi.stackexchange.com/questions/238254/is-hiding-among-zombies-an-idea-from-walking-dead-or-has-this-existed-earlier" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:186 }); posts_hot_network.click({ item_type:2, location:11 })">
                Is &quot;Hiding Among Zombies&quot; an idea from Walking Dead or has this existed earlier?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-ell" title="English Language Learners Stack Exchange"></div><a href="https://ell.stackexchange.com/questions/264078/water-a-beverage-that-contains-small-gas-bubbles" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:481 }); posts_hot_network.click({ item_type:2, location:11 })">
                Water / a beverage that contains small gas bubbles
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-diy" title="Home Improvement Stack Exchange"></div><a href="https://diy.stackexchange.com/questions/206911/can-i-run-an-underground-wire-to-a-shed-on-blocks" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:73 }); posts_hot_network.click({ item_type:2, location:11 })">
                Can I run an underground wire to a shed on blocks?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-academia" title="Academia Stack Exchange"></div><a href="https://academia.stackexchange.com/questions/157809/should-i-point-out-a-flaw-in-a-paper-before-i-start-to-write-the-review" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:415 }); posts_hot_network.click({ item_type:2, location:11 })">
                Should I point out a flaw in a paper before I start to write the review?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-worldbuilding" title="Worldbuilding Stack Exchange"></div><a href="https://worldbuilding.stackexchange.com/questions/188632/anatomically-correct-sentient-skeletons" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:579 }); posts_hot_network.click({ item_type:2, location:11 })">
                Anatomically Correct Sentient Skeletons
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-chess" title="Chess Stack Exchange"></div><a href="https://chess.stackexchange.com/questions/32636/how-should-one-take-advantage-of-the-premove-function-on-chess-com" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:435 }); posts_hot_network.click({ item_type:2, location:11 })">
                How should one take advantage of the &quot;premove&quot; function on chess.com?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-electronics" title="Electrical Engineering Stack Exchange"></div><a href="https://electronics.stackexchange.com/questions/528255/determining-if-mystery-pcb-with-barrel-jack-power-connector-is-center-positive-o" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:135 }); posts_hot_network.click({ item_type:2, location:11 })">
                Determining if mystery PCB with barrel jack power connector is center positive or center negative
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-cooking" title="Seasoned Advice"></div><a href="https://cooking.stackexchange.com/questions/112177/can-i-thaw-salmon-directly-in-water" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:49 }); posts_hot_network.click({ item_type:2, location:11 })">
                Can I thaw salmon directly in water?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-boardgames" title="Board &amp; Card Games Stack Exchange"></div><a href="https://boardgames.stackexchange.com/questions/53264/do-i-lose-if-i-have-an-empty-library-and-cast-brainstorm" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:147 }); posts_hot_network.click({ item_type:2, location:11 })">
                Do I lose if I have an empty library and cast Brainstorm?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-space" title="Space Exploration Stack Exchange"></div><a href="https://space.stackexchange.com/questions/48050/would-it-have-been-possible-to-launch-rockets-in-secret-in-the-1960s" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:508 }); posts_hot_network.click({ item_type:2, location:11 })">
                Would it have been possible to launch rockets in secret in the 1960s?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-worldbuilding" title="Worldbuilding Stack Exchange"></div><a href="https://worldbuilding.stackexchange.com/questions/188614/does-this-time-travel-delivery-service-cause-paradoxes-and-if-so-how-can-i-avoi" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:579 }); posts_hot_network.click({ item_type:2, location:11 })">
                Does this time travel delivery service cause paradoxes, and if so how can I avoid them?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-tex" title="TeX - LaTeX Stack Exchange"></div><a href="https://tex.stackexchange.com/questions/567458/how-to-draw-a-diagram-for-rope-around-the-earth-problem" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:85 }); posts_hot_network.click({ item_type:2, location:11 })">
                How to draw a diagram for &quot;Rope Around the Earth&quot; problem?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-codegolf" title="Code Golf Stack Exchange"></div><a href="https://codegolf.stackexchange.com/questions/213850/is-it-a-digit-haiku" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:200 }); posts_hot_network.click({ item_type:2, location:11 })">
                Is it a digit haiku?
            </a>

        </li>
        <li class="dno js-hidden">
            <div class="favicon favicon-physics" title="Physics Stack Exchange"></div><a href="https://physics.stackexchange.com/questions/588032/does-the-second-law-of-thermodynamics-imply-that-renewable-energy-also-leads-to" class="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:11, target_site:151 }); posts_hot_network.click({ item_type:2, location:11 })">
                Does the second law of thermodynamics imply that renewable energy also leads to global warming/climate change?
            </a>

        </li>
</ul>

    <a href="#" 
       class="show-more js-show-more js-gps-track" 
       data-gps-track="posts_hot_network.click({ item_type:3, location:11 })">
        more hot questions
    </a>
</div>

                        <div id="feed-link" class="js-feed-link">
    <a href="/feeds/question/5083682" title="Feed of this question and its answers">
        <svg aria-hidden="true" class="fc-orange-400 svg-icon iconRss" width="18" height="18" viewBox="0 0 18 18"><path d="M1 3c0-1.1.9-2 2-2h12a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm14.5 12C15.5 8.1 9.9 2.5 3 2.5V5a10 10 0 0110 10h2.5zm-5 0A7.5 7.5 0 003 7.5V10a5 5 0 015 5h2.5zm-5 0A2.5 2.5 0 003 12.5V15h2.5z"/></svg>
        Question feed
    </a>
</div>
<aside class="s-modal js-feed-link-modal" tabindex="-1" role="dialog" aria-labelledby="feed-modal-title" aria-describedby="feed-modal-description" aria-hidden="true">
    <div class="s-modal--dialog js-modal-dialog wmx4" role="document"  data-controller="se-draggable">
        <h1 class="s-modal--header fw-bold js-first-tabbable" id="feed-modal-title" data-target="se-draggable.handle" tabindex="0">
            Subscribe to RSS
        </h1>
        <div class="grid gs4 gsy fd-column">
            <div class="grid--cell">
                <label class="d-block s-label c-default" for="feed-url">
                    Question feed
                    <p class="s-description mt2" id="feed-modal-description">To subscribe to this RSS feed, copy and paste this URL into your RSS reader.</p>
                </label>
            </div>
            <div class="grid ps-relative">
                <input class="s-input" type="text" name="feed-url" id="feed-url" readonly="readonly" value="https://stackoverflow.com/feeds/question/5083682" />
                <svg aria-hidden="true" class="s-input-icon fc-orange-400 svg-icon iconRss" width="18" height="18" viewBox="0 0 18 18"><path d="M1 3c0-1.1.9-2 2-2h12a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm14.5 12C15.5 8.1 9.9 2.5 3 2.5V5a10 10 0 0110 10h2.5zm-5 0A7.5 7.5 0 003 7.5V10a5 5 0 015 5h2.5zm-5 0A2.5 2.5 0 003 12.5V15h2.5z"/></svg>
            </div>
        </div>
        <a class="s-modal--close s-btn s-btn__muted js-modal-close js-last-tabbable" href="#" aria-label="Close">
            <svg aria-hidden="true" class="svg-icon iconClearSm" width="14" height="14" viewBox="0 0 14 14"><path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41z"/></svg>
        </a>
    </div>
</aside>

        </div>
</div>
<script>StackExchange.ready(function(){$.get('/posts/5083682/ivc/cd57');});</script>
<noscript><div><img src="/posts/5083682/ivc/cd57" class="dno" alt="" width="0" height="0"></div></noscript><div style="display:none" id="js-codeblock-lang">lang-js</div></div>


    </div>
</div>`