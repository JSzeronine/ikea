<template>
    <li>

        <div class="benefit-tit">
            <slot name="number"></slot>
            <slot name="title"></slot>
        </div>
        <p class="benefit-txt">
            <slot name="description"></slot>
        </p>

    </li>
</template>

<script>
export default {
    name: "item-benefit"
}
</script>

<style scoped lang="scss">
li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: pxtovw414(30);
    padding-bottom: pxtovw414(30);
    border-bottom: 1px solid #DFDFDF;
    box-sizing: border-box;

    &:last-child{
        padding-bottom: 0;
        border-bottom: none;
    }

    .benefit-tit {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-bottom: pxtovw414(30);

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: pxtovw414(45);
            height: pxtovw414(45);
            margin-right: pxtovw414(15);
            border-radius: 100%;
            flex-shrink: 0;


            font-size: pxtovw414(16);
            line-height: pxtovw414(24);
            font-family: $font-family-bold;
            color: #fff;
            background-color: $color-set-green;
        }

        h3 {

            font-size: pxtovw414(22);
            line-height: pxtovw414(24);
            font-family: $font-family-bold;
        }
    }

    .benefit-txt {
        width: 100%;
        font-size: pxtovw414(16);
        line-height: pxtovw414(24);
        font-family: $font-family-regular;
    }
}

.desktop, tablet {
    li {
        margin-bottom: 30px;
        padding-bottom: 40px;

        &:last-child{
            padding-bottom: 0;
            margin-bottom: 40px;
        }

        .benefit-tit {
            margin-bottom: 20px;

            span {
                width: 45px;
                height: 45px;
                margin-right: 15px;

                font-size: 16px;
                line-height: 24px;
            }

            h3 {
                font-size: $font-size-s;
                line-height: 24px;
            }
        }
        .benefit-txt {
            font-size: 16px;
            line-height: 24px;
        }
    }
}


</style>