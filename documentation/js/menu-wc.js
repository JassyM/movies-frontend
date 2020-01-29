'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">My app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminLayoutModule.html" data-type="entity-link">AdminLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminLayoutModule-aac3c5be63abbb3ece6c2275228d3d5d"' : 'data-target="#xs-components-links-module-AdminLayoutModule-aac3c5be63abbb3ece6c2275228d3d5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminLayoutModule-aac3c5be63abbb3ece6c2275228d3d5d"' :
                                            'id="xs-components-links-module-AdminLayoutModule-aac3c5be63abbb3ece6c2275228d3d5d"' }>
                                            <li class="link">
                                                <a href="components/MovieCreateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieDeleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieIndexComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieShowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieShowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminLayoutModule-aac3c5be63abbb3ece6c2275228d3d5d"' : 'data-target="#xs-injectables-links-module-AdminLayoutModule-aac3c5be63abbb3ece6c2275228d3d5d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminLayoutModule-aac3c5be63abbb3ece6c2275228d3d5d"' :
                                        'id="xs-injectables-links-module-AdminLayoutModule-aac3c5be63abbb3ece6c2275228d3d5d"' }>
                                        <li class="link">
                                            <a href="injectables/MovieService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MovieService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Notification.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Notification</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-732d139a4b3e804332b2227f9da7209f"' : 'data-target="#xs-components-links-module-AppModule-732d139a4b3e804332b2227f9da7209f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-732d139a4b3e804332b2227f9da7209f"' :
                                            'id="xs-components-links-module-AppModule-732d139a4b3e804332b2227f9da7209f"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-732d139a4b3e804332b2227f9da7209f"' : 'data-target="#xs-injectables-links-module-AppModule-732d139a4b3e804332b2227f9da7209f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-732d139a4b3e804332b2227f9da7209f"' :
                                        'id="xs-injectables-links-module-AppModule-732d139a4b3e804332b2227f9da7209f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthGuardService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthGuardService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Notification.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Notification</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthLayoutModule.html" data-type="entity-link">AuthLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthLayoutModule-ad1bfb725dd22a1ca935f0a352d811ee"' : 'data-target="#xs-components-links-module-AuthLayoutModule-ad1bfb725dd22a1ca935f0a352d811ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthLayoutModule-ad1bfb725dd22a1ca935f0a352d811ee"' :
                                            'id="xs-components-links-module-AuthLayoutModule-ad1bfb725dd22a1ca935f0a352d811ee"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthLayoutModule-ad1bfb725dd22a1ca935f0a352d811ee"' : 'data-target="#xs-injectables-links-module-AuthLayoutModule-ad1bfb725dd22a1ca935f0a352d811ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthLayoutModule-ad1bfb725dd22a1ca935f0a352d811ee"' :
                                        'id="xs-injectables-links-module-AuthLayoutModule-ad1bfb725dd22a1ca935f0a352d811ee"' }>
                                        <li class="link">
                                            <a href="injectables/Notification.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Notification</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-e6b77622b402b21517cb3eb3f70706f2"' : 'data-target="#xs-components-links-module-ComponentsModule-e6b77622b402b21517cb3eb3f70706f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-e6b77622b402b21517cb3eb3f70706f2"' :
                                            'id="xs-components-links-module-ComponentsModule-e6b77622b402b21517cb3eb3f70706f2"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/EnvConfig.html" data-type="entity-link">EnvConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/Movie.html" data-type="entity-link">Movie</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});