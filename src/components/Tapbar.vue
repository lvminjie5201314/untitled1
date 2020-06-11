<template>
    <nav>
<!--   底部导航  声明式导航     -->
        <ul>

            <router-link to="/film" tag="li" active-class="active">
                <span>电影</span>
                <svg class="bi bi-calendar-day-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM0 5h16v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm11.215 2.855a.425.425 0 0 1-.43-.425c0-.242.192-.43.43-.43a.428.428 0 1 1 0 .855zm.336.563v4.105h-.672V8.418h.672zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z"/>
                </svg>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="active">
                <span>影院</span>
                <svg class="bi bi-camera-video-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.667 3h6.666C10.253 3 11 3.746 11 4.667v6.666c0 .92-.746 1.667-1.667 1.667H2.667C1.747 13 1 12.254 1 11.333V4.667C1 3.747 1.746 3 2.667 3z"/>
                    <path d="M7.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L7.404 7.304a.802.802 0 0 0 0 1.393z"/>
                </svg>
            </router-link>

            <router-link to="/center" tag="li" active-class="active">
                <span>我的</span>
                <svg class="bi bi-person-check-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                </svg>
            </router-link>

        </ul>

    </nav>
</template>
<script>


</script>

<style scoped lang="css">
    .active{
        color: red;
    }
    nav{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: wheat;
        z-index: 1000;

    }
    ul{
        display: flex;
        list-style: none;
        margin: 0px;
        padding: 0px;

    }
    ul li{
        flex: 1;
        text-align: center;
    }
    .icon{
        height: 20px;
        width: 20px;
        position: relative;
        top: 3px;
    }
</style>