<template>
    <div class="free">立即体验</div>
    <div class="logo">
        <img src="../../../public/img/wangyiyunlogo.png" alt="" width="80">
    </div>
</template>

<script>
export default {
    name:'LoginTop'
}
</script>
<style lang="less" scoped>
    .free {
        position: absolute;
        top: .4rem;
        right: .32rem;
        width: 1.6rem;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .32rem;
        background-color: #db2d1d;
        color: #e7857c;
        border-radius: .2rem;
    }
    .logo {
        position: relative;
        width: 100%;
        height: 8rem;
        img {
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            border-radius: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>