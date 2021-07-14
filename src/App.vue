<template>
    <div class="landing">
        <div class="header">
            <div class="header-inner">
                <div class="logo">
                    <svg class="logo-img" width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clipDAW@V@!$X!@#@#@c312)">
                            <path d="M1.71436 10.6583C11.4572 -1.05852 20.7572 0.676124 28.2858 11.0923C24.1525 17.6019 13.0515 26.6286 1.71436 10.6583Z" fill="#3790F5"/>
                            <path d="M28.9631 10.5022C28.7105 10.1428 22.6896 1.7037 14.9999 1.7037C7.31021 1.7037 1.28909 10.1428 1.03667 10.5018C0.797347 10.8427 0.797347 11.3051 1.03667 11.646C1.28909 12.0053 7.31021 20.4444 14.9999 20.4444C22.6896 20.4444 28.7105 12.0053 28.9631 11.6463C29.2028 11.3054 29.2028 10.8427 28.9631 10.5022ZM14.9999 18.5058C9.33562 18.5058 4.42975 12.9045 2.97751 11.0734C4.42787 9.24068 9.32347 3.64239 14.9999 3.64239C20.6639 3.64239 25.5695 9.24264 27.0223 11.0747C25.5719 12.9074 20.6763 18.5058 14.9999 18.5058Z" fill="#8EC3FF"/>
                            <g clip-path="url(#clipASDVCWQ#EB@#B!#B@!$)">
                                <path d="M17.5443 10.4207H17.394V9.79917C17.394 8.64969 16.3614 7.68947 15.0708 7.66897C15.0355 7.66841 14.965 7.66841 14.9298 7.66897C13.6391 7.68947 12.6066 8.64969 12.6066 9.79917V10.4207H12.4562C12.2246 10.4207 12.0356 10.6318 12.0356 10.8926V14.0097C12.0356 14.2702 12.2246 14.4834 12.4563 14.4834H17.5443C17.7759 14.4834 17.9649 14.2702 17.9649 14.0097V10.8926C17.9649 10.6318 17.7759 10.4207 17.5443 10.4207ZM15.4769 12.448V13.3899C15.4769 13.4977 15.3747 13.589 15.2526 13.589H14.748C14.6258 13.589 14.5236 13.4977 14.5236 13.3899V12.448C14.4051 12.345 14.3361 12.2025 14.3361 12.0448C14.3361 11.7461 14.5975 11.4895 14.9298 11.4776C14.965 11.4764 15.0356 11.4764 15.0708 11.4776C15.4031 11.4895 15.6645 11.7461 15.6645 12.0448C15.6644 12.2025 15.5955 12.345 15.4769 12.448ZM16.4032 10.4207H15.0708H14.9298H13.5973V9.79917C13.5973 9.11445 14.2272 8.54828 15.0003 8.54828C15.7733 8.54828 16.4032 9.11445 16.4032 9.79917V10.4207H16.4032Z" fill="white"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clipDAW@V@!$X!@#@#@c312">
                                <rect width="30" height="23" fill="white"/>
                            </clipPath>
                            <clipPath id="clipASDVCWQ#EB@#B!#B@!$">
                                <rect width="7.71429" height="6.81481" fill="white" transform="translate(11.1433 7.66855)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="logo-text">FRIENDSONLY</p>
                </div>
                <div v-if="!user" class="login-btn" @click="openPopUp('login')">Войти</div>
            </div>
        </div>
        <div class="container">
            <div class="container-title">
                <p class="title-text">FriendsOnly - контент 18+</p>
                <p class="title-text">только для друзей</p>
                <div class="container-models">
                    <div class="models-left">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8965 6.30632C9.75115 4.4602 11.2261 1.85452 11.2895 1.74621C11.3813 1.59208 11.381 1.40246 11.2887 1.24859C11.1964 1.09473 11.0261 1 10.8418 1C9.22275 1 7.95489 1.44379 7.07351 2.31913C5.56746 3.81473 5.63732 6.1425 5.66716 7.1365C5.6705 7.24664 5.67332 7.34176 5.67332 7.41245C5.67332 8.15049 5.79605 8.83182 5.90436 9.433C5.97416 9.82041 6.03443 10.155 6.04517 10.4179C6.05663 10.6996 6.00331 10.764 6.00108 10.7667C5.99347 10.7754 5.93011 10.8079 5.75892 10.8079C5.56364 10.8079 5.41971 10.7463 5.29212 10.6084C4.7939 10.0694 4.75945 8.59777 4.85472 7.79714C4.87175 7.65596 4.82546 7.51452 4.72748 7.4084C4.62953 7.30229 4.48924 7.24159 4.34197 7.24159C3.0016 7.24159 2 9.35623 2 11.247C2 12.1358 2.18534 13.0064 2.55081 13.8348C2.90413 14.6356 3.40793 15.3583 4.04836 15.9829C5.38198 17.2836 7.14045 18 8.99976 18C10.8666 18 12.6246 17.2938 13.95 16.0115C15.2719 14.7325 16 13.0404 16 11.2469C16 8.95849 14.144 7.03852 12.8965 6.30632Z" fill="#3790F5"/>
                        </svg>
                        <p class="models-left-text">Топ модели</p>
                    </div>
                    <div class="models-right">
                        <p class="models-right-text first">акция  -99%</p>
                        <p class="models-right-text second timer">15 мин. 45 сек</p>
                    </div>
                </div>
            </div>
            <div class="item-wrapper">
                <div v-for="(item,index) in items" :key="index" class="item">
                    <swiper ref="mySwiper" :options="swiperOption" >
                        <swiper-slide v-for="(photo,index) in item.photos" :key="index">
                            <div class="slider-item">
                                <img class="slider-img" :src="photo" alt="das">
                            </div>
                        </swiper-slide>
                        <swiper-slide v-if="item.video">
                            <div @click="modelsVideoController(index)" class="slider-item">
                                <video class="modelsVideo"  :style="{width: `100%`,height: `100%`,position: `absolute`,objectFit: `cover`,borderRadius:'10px'}" muted preload="auto">
                                    <source :src="item.video" type="video/mp4">
                                </video>
                                <div class="item-shadow" :style="{position:'absolute',left:'0',top:'0',right:'0',bottom:'0',background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 54.69%, rgba(0, 0, 0, 0.8) 100%)`,borderRadius:'10px'}"></div>
                                <div class="video-duration" :style="{position:'absolute',bottom:'20px',left:'15px',display:'flex',alignItems:'center'}">
                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.6087 4.33242C9.13043 4.62912 9.13043 5.37088 8.6087 5.66758L1.17391 9.89558C0.652174 10.1923 -4.30455e-07 9.8214 -4.04447e-07 9.228L-3.38356e-08 0.772003C-7.82773e-09 0.1786 0.652174 -0.192277 1.17391 0.104424L8.6087 4.33242Z" fill="white"/>
                                    </svg>
                                    <p class="video-text" :style="{marginLeft:'8px'}"></p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="slider-item" @click="showPopup = true">
                                <img class="slider-img" :src="item.photos[0]" alt="das">
                                <div class="blur">
                                    <div class="item-btn" :style="{margin:'auto',width:'106px',height:'36px',fontSize:'10px',fontWeight:'600',borderRadius:'8px'}" @click="user ? selectModel(item.photos[0]) : openPopUp('login')">Открыть доступ</div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="slider-item" @click="user ? selectModel(item.photos[0]) : openPopUp('login')">
                                <img class="slider-img" :src="item.photos[1]" alt="das">
                                <div class="blur" :style="{background: `rgba(0, 0, 0, 0.8)`,flexDirection:'column'}">
                                    <p :style="{fontSize: '40px',lineHeight:'48px',fontWeight: 'bold'}">+{{item.photosCount-3}}</p>
                                    <p :style="{fontSize: '15px',lineHeight:'18px',fontWeight: '500'}">фото</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <p class="item-name">{{item.title}}</p>
                    <div class="item-count">
                        <p class="count-left">{{item.videosCount}} видео</p>
                        <p class="count-right">{{item.photosCount}} фото</p>
                    </div>
                    <div class="item-btn" @click="selectModel(item.photos[0])">
                        <p class="item-btn-left">Получить доступ за  1 ₽ </p>
                        <p class="item-btn-right">500 ₽</p>
                    </div>
                </div>
            </div>
            <div class="best-videos">
                <div class="best-videos-title-wrapper">
                    <svg class="best-videos-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clipADCQWEdasvcacss)">
                            <path d="M16.8202 5.84306L12.5499 4.85445L10.3018 1.11707L10.3083 1.11922C10.1791 0.894575 9.99413 0.707115 9.77121 0.574996C9.05646 0.151344 8.13361 0.387321 7.70995 1.10208L5.44474 4.85665L1.17437 5.84526C0.930492 5.90012 0.704132 6.01489 0.515704 6.17913C-0.110506 6.72518 -0.175518 7.67554 0.370583 8.30175L3.25045 11.6179L2.87005 15.9936C2.84829 16.2396 2.88741 16.4872 2.98396 16.7146C3.30886 17.4793 4.19216 17.8358 4.95688 17.5109L8.99945 15.7916L12.9174 17.4529C13.1808 17.596 13.481 17.6572 13.7795 17.6285C14.6065 17.549 15.2126 16.8142 15.1331 15.9871L14.7527 11.6114L17.581 8.35333C17.772 8.15421 17.9045 7.90636 17.9642 7.63696C18.1436 6.82571 17.6315 6.02257 16.8202 5.84306Z" fill="#3790F5"/>
                        </g>
                        <defs>
                            <clipPath id="clipADCQWEdasvcacss">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h3 class="best-videos-title">Лучшие видео</h3>
                </div>
                <div class="video">
                    <swiper @slideChange="videoSlideChange" :options="videoSwiperOptions" class="videoSwiper" ref="videoSwiper" :style="{overflow:'hidden',borderRadius: '20px'}" >
                        <swiper-slide v-for="(videoSlide,index) of videoSliderData" :key="index" class="video-slide">
                            <video class="videoSlide" :src="videoSlide.path" muted loop preload="auto">
                                <source src="../public/video/ocean.mp4" type="video/mp4">
                            </video>
                        </swiper-slide>
                    </swiper>
                    <div v-if="videoSwiper" class="video-controllers">
                        <transition name="fade">
                            <div v-if="!isStart" class="video-btn prev" @click="prevVideoSlide" >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clipDVQWECASdacsds)">
                                        <path d="M2.63288 5.33237L7.46847 0.503978C7.64655 0.316079 7.86892 0.222168 8.13603 0.222168C8.40313 0.222168 8.6255 0.316183 8.80358 0.503978L9.36726 1.06033C9.55025 1.24329 9.64174 1.46569 9.64174 1.72776C9.64174 1.98486 9.55027 2.20991 9.36726 2.40269L5.76272 5.99996L9.36741 9.60463C9.55035 9.78759 9.64185 10.01 9.64185 10.2721C9.64185 10.5292 9.55038 10.7543 9.36741 10.947L8.80369 11.5033C8.62072 11.6862 8.39812 11.7777 8.13613 11.7777C7.87404 11.7777 7.65148 11.6862 7.46857 11.5033L2.63288 6.67487C2.44983 6.48203 2.35826 6.25704 2.35826 5.99993C2.35823 5.73787 2.44983 5.51534 2.63288 5.33237Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clipDVQWECASdacsds">
                                            <rect width="11.5556" height="11.5556" fill="white" transform="matrix(-1 0 0 1 11.7778 0.222168)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-if="!isEnd" class="video-btn next"  @click="nextVideoSlide" >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clipdbadsc1323123)">
                                        <path d="M9.36688 5.33237L4.53129 0.503978C4.35321 0.316079 4.13084 0.222168 3.86373 0.222168C3.59662 0.222168 3.37425 0.316183 3.19617 0.503978L2.6325 1.06033C2.44951 1.24329 2.35801 1.46569 2.35801 1.72776C2.35801 1.98486 2.44948 2.20991 2.6325 2.40269L6.23704 5.99996L2.63234 9.60463C2.44941 9.78759 2.35791 10.01 2.35791 10.2721C2.35791 10.5292 2.44938 10.7543 2.63234 10.947L3.19607 11.5033C3.37903 11.6862 3.60164 11.7777 3.86363 11.7777C4.12572 11.7777 4.34827 11.6862 4.53119 11.5033L9.36688 6.67487C9.54992 6.48203 9.6415 6.25704 9.6415 5.99993C9.64152 5.73787 9.54992 5.51534 9.36688 5.33237Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clipdbadsc1323123">
                                            <rect width="11.5556" height="11.5556" fill="white" transform="translate(0.222168 0.222168)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </transition>
                        <div v-if="videoSliderData[currentVideoSlide].paused"  class="video-btn play" @click="videoController(currentVideoSlide)">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.875 4.2028C2.875 1.95021 5.34797 0.572629 7.26327 1.75829L19.0512 9.05556C20.8668 10.1795 20.8668 12.8206 19.0512 13.9446L7.26327 21.2419C5.34797 22.4275 2.875 21.0499 2.875 18.7973V4.2028Z" fill="white"/>
                            </svg>
                        </div>
                        <div v-else class="video-btn stop" @click="videoController(currentVideoSlide)">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.91675 3.83342C1.91675 2.77487 2.77487 1.91675 3.83341 1.91675H7.66675C8.72529 1.91675 9.58341 2.77487 9.58341 3.83342V19.1668C9.58341 20.2253 8.72529 21.0834 7.66675 21.0834H3.83341C2.77487 21.0834 1.91675 20.2253 1.91675 19.1668V3.83342Z" fill="white"/>
                                <path d="M13.4167 3.83342C13.4167 2.77487 14.2749 1.91675 15.3334 1.91675H19.1668C20.2253 1.91675 21.0834 2.77487 21.0834 3.83342V19.1668C21.0834 20.2253 20.2253 21.0834 19.1668 21.0834H15.3334C14.2749 21.0834 13.4167 20.2253 13.4167 19.1668V3.83342Z" fill="white"/>
                            </svg>
                        </div>
                        <vue-ellipse-progress v-if="videoSliderData[currentVideoSlide].curTime" :progress="videoSliderData[currentVideoSlide].curTime" :legend="false" :reverse="true" color="#3790F5" emptyColor="none"  :size=65 animation="default 0 0" :style="{position:'absolute',bottom:'-10',left:'50%',transform:'translateX(-50%',zIndex:'-1'}" line="round">
                        </vue-ellipse-progress>
                    </div>
                    <div class="video-layer first"></div>
                    <div class="video-layer second"></div>
                </div>
            </div>
            <div class="howToEarn">
                <div class="howToEarn-logo-wrapper">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clipDAVSDQWCBEwecq)">
                            <path d="M9.00037 0C4.03126 0 0 4.02618 0 8.99562C0 13.9698 4.03126 18.0007 9.00033 18.0007C13.9722 18.0007 18 13.9698 18 8.99562C18 4.02618 13.9722 0 9.00037 0ZM9.64174 14.0037C9.4327 14.1897 9.19045 14.2832 8.91601 14.2832C8.63207 14.2832 8.38439 14.1914 8.17298 14.0074C7.96124 13.8237 7.85515 13.5666 7.85515 13.2362C7.85515 12.9431 7.95782 12.6965 8.16248 12.4966C8.36714 12.2967 8.61819 12.1967 8.91601 12.1967C9.20908 12.1967 9.45575 12.2967 9.656 12.4966C9.8559 12.6965 9.95619 12.9431 9.95619 13.2362C9.95582 13.5618 9.85111 13.8177 9.64174 14.0037ZM12.2483 7.54174C12.0877 7.83956 11.8969 8.09637 11.6757 8.31291C11.4551 8.52941 11.0584 8.89329 10.4857 9.4049C10.3278 9.54925 10.2008 9.67596 10.1056 9.78504C10.0104 9.8945 9.93923 9.99441 9.89279 10.0852C9.84603 10.176 9.81014 10.2668 9.78471 10.3576C9.75928 10.4481 9.72102 10.6077 9.66917 10.8357C9.58109 11.3195 9.30428 11.5614 8.83906 11.5614C8.59714 11.5614 8.39386 11.4825 8.22817 11.3242C8.06315 11.166 7.98083 10.9312 7.98083 10.6195C7.98083 10.2289 8.04147 9.89038 8.16244 9.6041C8.28273 9.31779 8.44367 9.06673 8.64357 8.85023C8.84382 8.63374 9.1135 8.37689 9.45334 8.07907C9.75116 7.81851 9.96632 7.62202 10.0988 7.48952C10.2316 7.35672 10.3431 7.20899 10.4335 7.04635C10.5247 6.88337 10.5694 6.70685 10.5694 6.51611C10.5694 6.14376 10.4315 5.83002 10.1544 5.57422C9.87758 5.31841 9.52044 5.19032 9.08303 5.19032C8.57109 5.19032 8.19432 5.31941 7.9524 5.57759C7.71047 5.83577 7.50619 6.21591 7.33846 6.71839C7.1799 7.24426 6.8797 7.50715 6.43821 7.50715C6.17765 7.50715 5.95778 7.41532 5.77854 7.23167C5.59964 7.04802 5.51019 6.84915 5.51019 6.63503C5.51019 6.1932 5.65216 5.74528 5.93577 5.29161C6.21971 4.83794 6.63374 4.46217 7.17819 4.16469C7.72231 3.86687 8.35763 3.71777 9.08303 3.71777C9.75762 3.71777 10.3529 3.84244 10.8693 4.09149C11.3856 4.34017 11.7848 4.67867 12.0663 5.10691C12.3475 5.53483 12.4885 6.00004 12.4885 6.50252C12.4891 6.89729 12.4089 7.24392 12.2483 7.54174Z" fill="#3790F5"/>
                        </g>
                        <defs>
                            <clipPath id="clipDAVSDQWCBEwecq">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h3 class="howToEarn-title">Я модель</h3>
                </div>
                <p class="howToEarn-text">Начните зарабатывать от 100 000 рублей в</p>
                <p class="howToEarn-text">месяц прямо сейчас</p>
                <div class="howToEarn-btn item-btn item-btn-left">
                    <a href="https://dev.friendsonly.me/howToEarn">Как зарабатывать в FriendsOnly?</a>
                </div>
            </div>
        </div>
        <transition-group name="fade">
            <div key="first" v-if="modalShow" class="popup-wrapper" @click="closePopUp">
                <div class="popup" :style="{padding:popUpPadding}">
                    <div v-if="modalType === 'newUsers'">
                        <div class="img-wrapper">
                            <div class="img-wrapper-item">
                                <img :style="{width:'100%',maxWidth:'100%',position:'absolute',top:'0',left:'0'}" src="../public/img/4.png">
                            </div>
                            <div class="img-wrapper-item second">
                                <img :style="{width:'100%',maxWidth:'100%',position:'absolute',top:'0',left:'0'}" src="../public/img/5.png">
                            </div>
                            <div class="img-wrapper-item third">
                                <img :style="{width:'100%',maxWidth:'100%',position:'absolute',top:'0',left:'0'}" src="../public/img/6.png">
                            </div>
                            <div class="img-wrapper-item second">
                                <img :style="{width:'100%',maxWidth:'100%',position:'absolute',top:'0',left:'0'}" src="../public/img/7.png">
                            </div>
                            <div class="img-wrapper-item">
                                <img :style="{width:'100%',maxWidth:'100%',position:'absolute',top:'0',left:'0'}" src="../public/img/4.png">
                            </div>
                        </div>
                        <p class="popup-title">Для новых пользователей</p>
                        <p class="popup-text">Подписка на одну из этих 5</p>
                        <p class="popup-text">ТОП-моделей всего за 1 ₽ вместо  <span :style="{textDecoration:'line-through'}">500 ₽</span></p>
                        <div :style="{margin:'20px 24px',height: '48px'}" class="item-btn" @click="closePopUp($event,true)">Выбрать</div>
                        <p class="popup-time timer">осталось 15 мин. 14 сек.</p>
                    </div>
                    <div v-else-if="modalType === 'makeFriends'" class="makeFriends" :style="{width:'185px',margin:'0 auto'}">
                        <div :style="{position:'relative',width:'87px',height:'87px',margin:'0 auto'}">
                            <img :style="{width:'100%',maxWidth:'100%',maxHeight:'100%',borderRadius:'50%',objectFit: 'cover',position:'absolute',top:'0',left:'0'}" :src="friendsModalPhoto ? friendsModalPhoto : require('../public/img/popup/1.png')" alt="img">
                            <svg :style="{position:'absolute',right:'0px',bottom:'0px'}" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7411 0.884443C13.1402 0.41937 13.8598 0.419369 14.2589 0.884442L16.9414 4.01068C17.1488 4.25238 17.4589 4.38084 17.7765 4.35658L21.8839 4.04282C22.4949 3.99615 23.0039 4.50505 22.9572 5.11608L22.6434 9.22349C22.6192 9.54105 22.7476 9.85118 22.9893 10.0586L26.1156 12.7411C26.5806 13.1402 26.5806 13.8598 26.1156 14.2589L22.9893 16.9414C22.7476 17.1488 22.6192 17.4589 22.6434 17.7765L22.9572 21.8839C23.0039 22.4949 22.495 23.0039 21.8839 22.9572L17.7765 22.6434C17.4589 22.6192 17.1488 22.7476 16.9414 22.9893L14.2589 26.1156C13.8598 26.5806 13.1402 26.5806 12.7411 26.1156L10.0586 22.9893C9.85118 22.7476 9.54105 22.6192 9.22349 22.6434L5.11609 22.9572C4.50505 23.0039 3.99615 22.495 4.04282 21.8839L4.35658 17.7765C4.38084 17.4589 4.25238 17.1488 4.01068 16.9414L0.884443 14.2589C0.41937 13.8598 0.419369 13.1402 0.884442 12.7411L4.01068 10.0586C4.25238 9.85118 4.38084 9.54105 4.35658 9.22349L4.04282 5.11609C3.99615 4.50505 4.50505 3.99615 5.11608 4.04282L9.22349 4.35658C9.54105 4.38084 9.85118 4.25238 10.0586 4.01068L12.7411 0.884443Z" fill="#3790F5"/>
                                <g clip-path="url(#clipDASVDASVDASEDCQWEVWQEWQCEwecacsda)">
                                    <path d="M14.2798 18.2393C13.9799 18.6464 13.5128 18.8966 13.0078 18.9215C12.5028 18.9466 12.0136 18.743 11.6753 18.3672L8.64286 15.0021C8.16092 14.4676 8.20373 13.6437 8.73822 13.1617C9.27323 12.6798 10.0966 12.7229 10.5786 13.2576L12.724 15.6386C12.7558 15.674 12.8019 15.693 12.8494 15.6907C12.897 15.6883 12.9406 15.6645 12.9691 15.6266L17.3788 9.6456C17.8057 9.06624 18.6214 8.94293 19.201 9.37002C19.7801 9.7971 19.9032 10.6128 19.4761 11.1919L14.2798 18.2393Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clipDASVDASVDASEDCQWEVWQEWQCEwecacsda">
                                        <rect width="11.4231" height="11.4231" fill="white" transform="translate(8.30713 8.30725)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p class="popup-title">1 ₽ </p>
                        <p class="popup-text">через 3 дня 499₽/месяц</p>
                        <div class="item-btn" :style="{marginTop:'25px'}" @click="user ? subscribeOnModel() : openPopUp('login')">Подружиться</div>
                        <p class="popup-text">Будет списан 1 рубль для подтверждения </p>
                    </div>
                    <Register @setUser="setUser" @setLoginKey="setLoginKey"  @setLoading="setLoading" @login="showLoginModal" @closeModal="closeModal"  @showNotification="openNotification" v-else-if="modalType === 'registration'"/>
                    <Login @setLoading="setLoading" @register="showRegisterModal" @closeModal="closeModal" @showNotification="openNotification" v-else-if="modalType === 'login'"/>
                </div>
            </div>
            <div key="second" class="notification" v-if="showNotification">
                <p class="active">{{notificationText}}</p>
            </div>
            <div key="third" v-if="loading" class="loading">
                <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="33.5" cy="33.5" r="28.5" stroke="#F0F0F0" stroke-width="10"/>
                    <path d="M34 67C36.7614 67 39 64.7614 39 62C39 59.2386 36.7614 57 34 57V67ZM34 10C36.7614 10 39 7.76142 39 5C39 2.23858 36.7614 0 34 0V10ZM34 57C20.6628 57 10 46.3971 10 33.5H0C0 52.0832 15.3047 67 34 67V57ZM10 33.5C10 20.6029 20.6628 10 34 10V0C15.3047 0 0 14.9168 0 33.5H10Z" fill="#E2E2E2"/>
                </svg>
            </div>
        </transition-group>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    const Register = () => import('./components/Register')
    const Login = () => import('./components/Login')
    const Landing = {
        name: "Landing",
        data:()=>({
            user: null,
            showNotification:false,
            notificationText:'',
            loading:false,
            modalShow:false,
            modalType:'',
            friendsModalPhoto: null,
            popUpPadding:'20px 15px 25px',
            time:959,
            timerId:null,
            videoProgress: null,
            videoPaused:true,
            videoSwiper: null,
            videoSliderData:[
                {path:require('../public/video/1.mp4'),paused:true,curTime:null},
                {path:require('../public/video/2.mp4'),paused:true,curTime:null},
                {path:require('../public/video/3.mp4'),paused:true,curTime:null},
                {path:require('../public/video/4.mp4'),paused:true,curTime:null},
            ],
            items:[
                {
                    title:'Kira Mayern',
                    videosCount:500,photosCount:742,
                    photos:[require('../public/img/slider/1.png'),require('../public/img/slider/2.png'),require('../public/img/slider/3.png')],
                    video:[require('../public/video/5.mp4')],
                    id:0,
                },{
                    title:'Constance Mayerovna',
                    videosCount:251,photosCount:612,
                    photos:[require('../public/img/slider/4.png'),require('../public/img/slider/5.png'),require('../public/img/slider/6.png')],
                    video:[require('../public/video/6.mp4')],
                    id:0,
                },{
                    title:'Kelly Warner',
                    videosCount:623,photosCount:256,
                    photos:[require('../public/img/slider/7.png'),require('../public/img/slider/8.png'),require('../public/img/slider/9.png')],
                    video:[require('../public/video/7.mp4')],
                    id:0,
                },{
                    title:'Carolyn Brooks',
                    videosCount:252,photosCount:125,
                    photos:[require('../public/img/slider/10.png'),require('../public/img/slider/11.png'),require('../public/img/slider/12.png')],
                    video:[require('../public/video/8.mp4')],
                    id:0,
                },{
                    title:'Nicholas Porter',
                    videosCount:345,photosCount:432,
                    photos:[require('../public/img/slider/13.png'),require('../public/img/slider/14.png'),require('../public/img/slider/15.png')],
                    video:[require('../public/video/9.mp4')],
                    id:0,
                },
                ],
            videoSwiperOptions: {
                noSwiping:false,
            },
            swiperOption: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            }
        }),
        methods:{
            subscribeOnModel(id){
                document.location.replace(`https://friendsonly.me/auth_redirect/token/${this.user.token}?link=/yakassa/card/follow/bank_card/${id}`)
            },
            setUser(user){
                this.user = user;
            },
            setLoading(flag){
                if (flag) this.loading = flag;
                else this.loading = flag;
            },
            setLoginKey(){
                this.loginKey++
            },
            openNotification(text){
                this.notificationText = text;
                this.showNotification = true;
                setTimeout(()=>{
                    this.closeNotification();
                },3000)
            },
            closeNotification(){
              this.showNotification = false;
            },
            selectModel(photo){
                this.friendsModalPhoto = photo;
                this.openPopUp('makeFriends');
            },
            openPopUp(type){
                this.modalShow = true;
                this.modalType = type;
            },
            closeModal(){
                this.modalShow = false;
                this.modalType = ''
            },
            closePopUp(e,close = false){
                if (e.target.classList.contains('popup-wrapper')){
                    this.modalShow = false;
                    this.modalType = ''
                } else if (close === true){
                    this.modalShow = false;
                    this.modalType = ''
                }
            },
            showLoginModal(){
                this.modalType = 'login';
            },
            showRegisterModal(){
                this.modalType = 'registration'
            },
            createTimer(){
                if (this.time <= 0) this.time = 959;
                let minutes = Math.floor(this.time/60);
                let seconds = this.time % 60;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                minutes =  minutes === 0 ? '' : minutes+' мин.';
                let timers = document.querySelectorAll('.timer');
                timers.forEach((timer,index)=>{
                    if (index === 0){
                        timer.innerHTML = `${minutes} ${seconds} сек.`
                    } else {
                        timer.innerHTML = `осталось ${minutes} ${seconds} сек.`
                    }
                })
                this.time -= 1;
            },
            videoSlideChange(){
                this.videoSliderData = this.videoSliderData.map(video=>({...video,paused:true}))
                let videos = document.querySelectorAll('.videoSlide');
                videos.forEach(video=>{
                    if (!video.paused) video.pause();
                })
            },
            prevVideoSlide(){
                this.videoSwiper.slidePrev();
            },
            nextVideoSlide(){
                this.videoSwiper.slideNext();
            },
            modelsVideoController(index){
                let video = document.querySelectorAll('.modelsVideo')[index];
                video.requestFullscreen();
            },
            videoController(index){
                let video = document.querySelectorAll('.videoSlide')[index];
                if (video.paused){
                    video.play();
                    this.videoSliderData[index].paused = false;
                } else {
                    video.pause();
                    this.videoSliderData[index].paused = true;
                }
            },
        },
        watch:{
            user(newVal){
                console.log('newVal',newVal)
                if (newVal) this.$forceUpdate();
            },
            modalShow(newVal){
                if (newVal === true) document.body.style.overflow = 'hidden'
                else {
                document.body.style.overflow = 'scroll'
                }
            },
            loading(newVal){
                if (newVal === true) document.body.style.overflow = 'hidden';
                else if (newVal === false) {
                    document.body.style.overflow = ''
                }
            },
        },
        computed:{
            isStart(){
                return this.videoSwiper.isBeginning;
            },
            isEnd(){
                return this.videoSwiper.isEnd;
            },
            currentVideoSlide(){
                return this.videoSwiper.activeIndex
            }
        },
        components: {
            Register,
            Login,
            Swiper,
            SwiperSlide,
        },
        mounted(){
            setTimeout(()=>{
                this.modalShow = true;
                this.modalType = 'newUsers';
            },4500)
            this.user = JSON.parse(localStorage.getItem('user')) || null;
            this.videoSwiper = document.querySelector('.videoSwiper').swiper;
            this.timerId = setInterval(this.createTimer,1000);
            let videos = document.querySelectorAll('.videoSlide')
            videos.forEach((video,index)=>{
                video.ontimeupdate = () => {
                    this.videoSliderData[index].curTime = Math.floor(video.currentTime/video.duration*100)
                };
            })
            let modelsVideos = document.querySelectorAll('.modelsVideo');
            let modelsText = document.querySelectorAll('.video-text');
            modelsVideos.forEach((video,index)=>{
                let intervalId = setInterval(function() {
                    if (video.readyState > 0) {
                        let seconds = video.duration;
                        modelsText[index].innerHTML = `00:${Math.floor(seconds)}`;
                        clearInterval(intervalId);
                    }
                }, 200);
            })
        },
        beforeDestroy(){
            clearInterval(this.timerId)
        },
        directives: {
            swiper: directive
        }
    }
    export default  Landing
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    @font-face {
        font-family: 'SF Pro Display';
        src: url(../public/fonts/SFProDisplay-Regular.woff);
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'SF Pro Rounded';
        src: url(../public/fonts/SFProRounded-Regular.woff);
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'SF Pro Display';
        src: url(../public/fonts/SFProDisplay-Bold.woff);
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: 'SF Pro Display';
        src: url(../public/fonts/SFProDisplay-Semibold.woff);
        font-weight: 500;
        font-display: swap;
    }
    body {
        font-family: "SF Pro Display";
    }
    a {
        text-decoration: none;
        color: #FFFFFF;
    }
    body::-webkit-scrollbar {
        display: none;
    }
</style>
<style scoped>
   .swiper-container {
       overflow: visible;
   }
    .landing {
        min-height: 100vh;
        max-width: 600px;
        margin: 0 auto;
        overflow: hidden;
    }
    .popup-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(30px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
    }
    .popup {
        width: 285px;
        background: #FFFFFF;
        border-radius: 20px;
        transition: .2s;
    }
    .img-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
    }
    .img-wrapper-item {
        width: 23px;
        height: 28px;
        border-radius: 8px;
        position: relative;
    }
    .img-wrapper-item.second {
        width: 39px;
        height: 47px;
    }
    .img-wrapper-item.third {
        width: 69px;
        height: 84px;
    }
    .popup-title {
        margin: 25px 0 5px;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
    }
    .popup-btn {
        width: 100%;
        height: 55px;
        border-radius: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        color: #FFFFFF;
        cursor: pointer;
        margin-bottom: 10px;
    }
    .popup-btn.registration {
        background: linear-gradient(95.17deg, #FFBD59 -13%, #FF6745 130.82%);
    }
   .popup-btn.facebook {
       background: linear-gradient(90deg, #157DC3 0%, #07578D 100%), linear-gradient(90deg, #29B9F5 0%, #0B94CD 100%);
   }
   .popup-btn.telegram {
       background: linear-gradient(90deg, #29B9F5 0%, #0B94CD 100%);
   }
   .popup-btn.email {
       background: linear-gradient(89.99deg, #3790F5 0.01%, #1B76FF 100%);
   }
   .popup-btn.phone {
       background: linear-gradient(90deg, #54ADFF 0%, #549CFF 100%);
   }
    .popup-registration-icon {
        position: absolute;
        left: 29px;
    }
    .popup-text {
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
        line-height: 150%;
        opacity: .5;
    }
    .popup-time {
        text-align: center;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: #3790F5;
    }
    .header {
        height: 63px;
        display: flex;
        align-items: center;
        padding: 0 17px 0 30px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.05);;
    }
    .header-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .logo-text {
        margin-left: 6px;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
    }
    .login-btn {
        width: 96px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(55, 144, 245, 0.1);
        border: 1.5px solid #3790F5;
        border-radius: 10px;
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: #3790F5;
    }
    .container {
        padding: 0 30px;
    }
    .container-title {
        margin: 30px 0 21px;
    }
    .title-text {
        font-weight: 800;
        font-size: 20px;
        line-height: 150%;
    }

    .container-models {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0 0;
    }
    .models-left {
        display: flex;
        align-items: center;
    }
    .models-left-text {
        margin-left: 12px;
        font-weight: bold;
        font-size: 22px;
        line-height: 150%;
    }
    .models-right {
        text-align: end;
    }
    .models-right-text {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }
    .models-right-text.first {
        opacity: 0.5;
    }
    .models-right-text.second {
        color: #3790F5;
        font-weight: 600;
        font-size: 10px;
        line-height: 150%;
    }
    .item {

    }
    .slider {
        height: 186px;
        overflow: visible;
        display: flex;
        width: min-content;
    }
    .slider-item {
        height: 190px;
        width: 145px;
        border-radius: 10px;
        position: relative;
    }
    .slider-item .blur {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
        .slider-img {
            height: 100%;
            width: 100%;
            max-width: 100%;
            position: absolute;
            object-fit: cover;
            left: 0;
            top: 0;
            border-radius: 10px;
        }
        .item-name {
            margin: 20px 0 10px;
            font-weight: 800;
            font-size: 28px;
            line-height: 150%;
        }
        .item-count{
            display: flex;
        }
        .count-left, .count-right {
            font-weight: 500;
            font-size: 14px;
            line-height: 155%;
            opacity: .5;
        }
        .count-left {
            margin-right: 15px;
        }
        .item-btn {
            margin: 15px 0 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 55px;
            background: rgba(55, 144, 245, 1);
            color: #FFFFFF;
            border-radius: 15px;
        }
        .item-btn.blur {

        }
        .item-btn-left {
            margin-right: 10px;
            font-weight: 800;
            font-size: 15px;
            line-height: 18px;
            color: #FFFFFF;
        }
        .item-btn-right {
            text-decoration: line-through;
            font-size: 18px;
            line-height: 21px;
            color: #94C6FF;
        }
        .best-videos {}
        .best-videos-title-wrapper {
            display: flex;
            align-items: center;
            margin: 10px 0 23px;
        }
        .best-videos-title {
            font-weight: bold;
            font-size: 22px;
            line-height: 150%;
        }
        .best-videos-icon {
            margin-right: 10px;
        }
        .video {
            border-radius: 20px;
            height: 590px;
            margin-bottom: 70px;
            position: relative;
        }
        .video video {
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-radius: 20px;
            z-index: 0;
        }
        .video-text {
            font-weight: 800;
            font-size: 14px;
            line-height: 17px;
            color: #FFFFFF;
        }
        .video-slide {
            height: 590px;
            position: relative;
        }
        .video-layer {
            position: absolute;
            bottom: -20px;
            width: 85%;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            z-index: -1;
        }
        .video-layer.first {
            background: #3790F5;
            border-radius: 23px;
        }
        .video-layer.second {
            background: rgba(55, 144, 245, 0.2);
            border-radius: 25px;
            bottom: -40px;
            width: 70%;
        }
        .video-controllers {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: absolute;
            bottom: 30px;
            z-index: 2;
        }
        .video-btn.prev {
            height: 40px;
            width: 40px;
            background: #060719;
            border-radius: 30px;
            margin: 0;
            position: absolute;
            left: 17%;
        }
        .video-btn {
            height: 57px;
            width: 57px;
            background: #060719;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 25px;
        }
        .video-btn.stop {
        }
        .video-btn.next {
            height: 40px;
            width: 40px;
            background: #060719;
            border-radius: 30px;
            margin: 0;
            position: absolute;
            right: 17%;
        }
        .howToEarn {

        }
        .howToEarn-logo-wrapper {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        .howToEarn-title {
            margin-left: 10px;
            font-weight: bold;
            font-size: 22px;
            line-height: 150%;
        }
        .howToEarn-text {
            font-weight: 500;
            font-size: 14px;
            line-height: 155%;
            opacity: .5;
        }
        .howToEarn-btn {
            margin: 40px 0;
        }
       .fade-enter-active, .fade-leave-active {
           transition: opacity .5s;
       }
       .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
           opacity: 0;
       }
       .swiper-slide {
           width:145px;
       }
   .notification{
       position: fixed;
       z-index: 500;
       left: 0;
       right: 0;
       top: 30px;
       width: 100%;
       min-height: 40px;
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .notification p{
       width: 100%;
       min-height: 40px;
       padding-top: 10px;
       padding-bottom: 10px;
       max-width: 320px;
       display: flex;
       align-items: center;
       justify-content: center;
       background: rgba(0, 0, 0, 0.65);
       backdrop-filter: blur(15px);
       -webkit-backdrop-filter: blur(15px);
       border-radius: 8px;
       font-family: SF Pro Display;
       font-style: normal;
       font-weight: 500;
       font-size: 14px;
       line-height: 17px;
       text-align: center;
       color: #FFFFFF;
       opacity: 0;
       transition: .3s;
   }
   .notification p.active{
       opacity: 1;
   }
   .loading {
       position: fixed;
       left: 0;
       top: 0;
       right: 0;
       bottom: 0;
       background: rgba(0, 0, 0, 0.6);
       backdrop-filter: blur(30px);
       z-index: 50;
       display: flex;
       align-items: center;
       justify-content: center;
   }
    .loading svg {
        animation: rotate linear 2s infinite;
    }
   @keyframes rotate {
       0% {
           transform: rotate(0);
       }
       100% {
           transform: rotate(360deg);
       }
   }
   @media screen and (max-width: 350px) {
       .video-btn.prev {
           left: 10%;
       }
       .video-btn.next {
            right: 10%;
       }
   }
</style>
