<script setup>

</script>

<template>
    <div class="home-page">
        <section class="home-page__about">
            <video autoplay muted loop src="@/assets/mainpage-bg.mp4"></video>
        </section>
        <section>
            <div class="row">
                <div class="col-default-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit unde assumenda explicabo officia ducimus ab earum doloribus quisquam aliquid.
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.home-page {
    &__about {
        position: relative;
        padding-top: 237px;
        height: 100%;
        overflow: hidden;
        margin-left: calc(var(--token-grids-desktop-offset) * -1);
        margin-right: calc(var(--token-grids-desktop-offset) * -1);

        video {
            position: absolute;
            bottom: 0;
            left: 0;
            object-fit: cover;
            min-width: 100%;
            min-height: 100%;
        }
    }
}
</style>