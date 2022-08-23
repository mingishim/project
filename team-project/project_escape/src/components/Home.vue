<template>
        <div class="page-header" loading="lazy" style="width: 100%;">
                <div class="row">
                    <div class="col-lg-7 text-center mx-auto position-relative">
                        <h1 class="text-white pt-3 mt-n5 me-2" style="display: inline-block;">
                            Sme 출퇴근 기록 프로그램
                        </h1>
                        <p class="lead text-white px-5 mt-3" style="font-weight: 500; height: 300px;">
                            <b>sme 출퇴근 기록 프로그램은
                                <br>더 나은 하루를 만들어줍니다</b>
                                <br>
                                    <br>
                                        하루하루 아무 생각 없이 랩실에서 하루를
                                        <br>시작하기보다 출근 시간 및 해야 할 일을 미리 생각해보며 계획과 함께 일과를 보낸다면 훨씬 효율적인 일정을 소화 할 수 있을 것입니다.

                                        </p>
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
                                                            <span>1</span>
                                                        </h1>
                                                        <h5 class="mt-3">회원가입 및 로그인</h5>
                                                        <p class="text-sm font-weight-normal">
                                                            소속랩실, 이름, 이메일, 비밀번호를 입력하여 회원가입을 하고,
                                                            <br>가입 완료시 로그인을 한다.
                                                        </p>
                                                    </div>
                                                    <hr class=" dark"></div>
                                                    <div class="col-md-4 position-relative">
                                                        <div class="text-center">
                                                            <h1 class="text-gradient text-success">
                                                                <span>2</span>
                                                            </h1>
                                                            <h5 class="mt-3">입실버튼 누르기</h5>
                                                            <p class="text-sm font-weight-normal">현재 시간을 확인하며 해야 할 일 목록에 계획을 채워넣는다.</p>
                                                        </div>
                                                        <hr class=" dark"></div>
                                                        <div class="col-md-4 position-relative">
                                                            <div class="text-center">
                                                                <h1 class="text-gradient text-success">
                                                                    <span>3</span>
                                                                </h1>
                                                                <h5 class="mt-3">탈출 버튼 누르기</h5>
                                                                <p class="text-sm font-weight-normal">퇴근 전 탈출 버튼을 통해 퇴근 시간 확인 및 리스트 수행도를
                                                                    <br>확인한다.</p>
                                                            </div>
                                                            <hr class="dark"></div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                </template>

                                <script>
                                    export default {};
                                </script>

                                <style scoped="scoped">
                                    .card {
                                        --bs-card-border-color:rgba(0, 0, 0, 0.125) --bs-card-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.9);
                                    }
                                    .page-header {
                                        padding: 0;
                                        position: relative;
                                        height: 500px;
                                        overflow: hidden;
                                        display: flex;
                                        align-items: center;
                                        background-size: cover;
                                        background-position: 50%;
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
                                        box-shadow: inset 0 0 1px 1px rgb(250 250 250 / 90%), 0 20px 27px 0 rgb(0 0 0 / 50%) !important;

                                    }


                                    .blur {
                                        backdrop-filter : saturate(200%) blur(30px) background-color rgba(255, 255, 255, 0.8) !important
                                    }

                                    hr.vertical.dark {
                                        background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4), transparent);
                                    }
                                </style>