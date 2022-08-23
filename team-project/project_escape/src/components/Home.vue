<template>
    <div class="header-2">
        <div class="page-header" loading="lazy">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 text-center mx-auto position-relative">
                        <h1 class="text-white pt-3 mt-n5 me-2" style="display: inline-block;">
                            소개글
                        </h1>
                        <p class="lead text-white px-5 mt-3" style="font-weight: 500;">
                            Yo 일어나라 그대여 (yo) 더 치명적인 전쟁 속에 (ooh) 두발로 버텨 적의, hook, Black Mamba 두렵지 않아 네가,
                            hoot, 부셔줄게
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
            <section class="pt-3 pb-4" id="count-stats">
                <div>
                    <div class="row">
                        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
                            <div class="row">
                                <div class="col-md-4 position-relative">
                                    <div class="text-center">
                                        <h1 class="text-gradient text-success">
                                            <span>70</span>
                                        </h1>
                                        <h5 class="mt-3">Coded Elements</h5>
                                        <p class="text-sm font-weight-normal">
                                            From buttons, to inputs, navbars, alerts or cards, you are covered
                                        </p>
                                    </div>
                                    <hr class="vertical dark"></div>
                                    <div class="col-md-4 position-relative">
                                        <div class="text-center">
                                            <h1 class="text-gradient text-success">
                                                <span>15</span>
                                            </h1>
                                            <h5 class="mt-3">Design Blocks</h5>
                                            <p class="text-sm font-weight-normal">
                                                Mix the sections, change the colors and unleash your creativity
                                            </p>
                                        </div>
                                        <hr class="vertical dark"></div>
                                        <div class="col-md-4 position-relative">
                                            <div class="text-center">
                                                <h1 class="text-gradient text-success">
                                                    <span>70</span>
                                                </h1>
                                                <h5 class="mt-3">Coded Elements</h5>
                                                <p class="text-sm font-weight-normal">
                                                    From buttons, to inputs, navbars, alerts or cards, you are covered
                                                </p>
                                            </div>
                                            <hr class="dark"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </template>

            <script>
                export default {};
            </script>

            <style scoped="scoped">
                .page-header {
                    height: 300px;
                }

                .header-2 {
                    position: relative;
                    top: 50px;
                }

                .page-header {
                    background-image: url("../assets/vue-mk-header.jpg");
                    padding: 0;
                    position: realtive;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    background-size: cover;
                    background-position: 50%;
                }
                .shadow-blur {
                    box-shadow: inset 0 0 1px 1px rgb(254 254 254 / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%) !important;
                }

                .blur {
                    backdrop-filter : saturate(200%) blur(30px) background-color rgba(255, 255, 255, 0.8) !important
                }

                hr.vertical.dark {
                    background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4), transparent);
                }
            </style>