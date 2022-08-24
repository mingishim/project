<template>
    <div class="page-header" loading="lazy" style="width: 100%;" img="">
        <div class="row">
            <div class="col-lg-7 text-center mx-auto position-relative">
                <h1 class="title">
                    <strong>SME 출퇴근 기록 프로그램</strong>
                </h1>
                <br>

                    <p class="lead text-white px-5 mt-3" style="font-weight: 500; height: 300px;">
                        <p class="title2">SME 출퇴근 기록 프로그램은 더 나은 하루를 만들어줍니다</p>
                        <br>
                            <br>
                                <div class="sub-title-container">
                                    <P class="sub-title">하루하루 아무 생각 없이 랩실에서 하루를 시작하기보다</P>
                                    <P class="sub-title">출근 시간 및 해야 할 일을 미리 생각해보며 계획과 함께 일과를 보낸다면</P>
                                    <P class="sub-title">훨씬 효율적인 일정을 소화 할 수 있을 것입니다</P>
                                </div>
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
                                                <h5 class="mt-3">
                                                    <strong>회원가입 및 로그인</strong>
                                                </h5>
                                                <br>
                                                    <div class="text-box">
                                                        소속랩실, 이름, 이메일, 비밀번호를 입력하여 회원가입을 하고,
                                                        <p>가입 완료시 로그인을 한다.</p>
                                                    </div>
                                                </div>
                                                <hr class=" dark"></div>
                                                <div class="col-md-4 position-relative">
                                                    <div class="text-center">
                                                        <h1 class="text-gradient text-success">
                                                            <span>2</span>
                                                        </h1>
                                                        <h5 class="mt-3">
                                                            <strong>입실버튼 누르기</strong>
                                                        </h5>
                                                        <br>
                                                            <div class="text-box">현재 시간을 확인하며
                                                                <p>To Do List 목록에 계획을 채워넣는다.</p>
                                                            </div>
                                                        </div>
                                                        <hr class=" dark"></div>
                                                        <div class="col-md-4 position-relative">
                                                            <div class="text-center">
                                                                <h1 class="text-gradient text-success">
                                                                    <span>3</span>
                                                                </h1>
                                                                <h5 class="mt-3">
                                                                    <strong>탈출 버튼 누르기</strong>
                                                                </h5>
                                                                <br>
                                                                    <div class="text-box">퇴근 전 탈출 버튼을 통해
                                                                        <p>퇴근 시간 확인 및 리스트 수행도를 확인한다.</p>
                                                                    </div>
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
                                        @import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);
                                        .title {
                                            width: 770px;
                                            color: #007BFF;
                                            font-weight: 350;
                                            font-family: 'Do Hyeon', sans-serif;
                                        }
                                        .title2 {
                                            width: 680px;
                                            color: #007BFF;
                                            font-weight: 600;
                                            font-family: 'Do Hyeon', sans-serif;
                                        }
                                        .sub-title {
                                            width: 680px;
                                            color: rgb(74, 74, 74);
                                            font-weight: 500;
                                            font-family: 'Do Hyeon', sans-serif;
                                            font-size: 20px;
                                        }
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
                                            background-image: url("../assets/고래.png");
                                            padding: 0;
                                            position: realtive;
                                            overflow: hidden;
                                            display: flex;
                                            align-items: center;
                                            background-size: cover;
                                            background-position: 50%;
                                        }

                                        .text-box {
                                            font-size: 14px;
                                        }
                                        .lead text-white px-5 mt-3 {
                                            width: 1000px;
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
                                        span {
                                            color: skyblue;
                                        }
                                        .text-sm font-weight-normal {
                                            font-size: 13px;
                                        }
                                    </style>