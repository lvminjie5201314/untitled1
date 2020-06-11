<template>
    <nav>
        <!--   底部导航  声明式导航     -->
        <ul>

            <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>

            <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>


        </ul>

    </nav>
</template>

<style scoped lang="css">
    .active{
        color: red;
        border-bottom: 5px solid blue;
    }
    ul{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li{
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
</style>