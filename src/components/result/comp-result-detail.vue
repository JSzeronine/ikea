<template>
	<dl class="type-info__item">
		<dt>
			<slot name="title"></slot>
		</dt>
		<dd>
			<slot name="text"></slot>
		</dd>
	</dl>
</template>

<script>
export default {
	name: "comp-info-detail"
}
</script>

<style scoped lang="scss">
.type-info__item {
	width: 100%;
	margin-top: pxtovw414(50);
	line-height: 1;

	dt {
		position: relative;
		max-width: pxtovw414(180);
		padding-top: pxtovw414(16);
		font-family: $font-family-bold;
		font-size: pxtovw414(22);
		line-height: 1.5;

		&:before {
			content: "";
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: pxtovw414(20);
			height: pxtovw414(4);
			background-color: #00F47A;
		}
	}

	dd {
		margin-top: pxtovw414(10);
		line-height: 1.5;
		font-family: $font-family-regular;
		font-size: pxtovw414(16);
	}
}

.desktop, .tablet {
	.type-info__item {
		margin-top: 60px;

		dt {
			max-width: 100%;
			padding-top: 18px;
			font-size: $font-size-s;

			&:before {
				width: 20px;
				height: 4px;
			}
		}

		dd {
			margin-top: 10px;
			font-size: $font-size-xs;
		}
	}
}

@media screen and (orientation: landscape) {
	.mobile {
		.type-info__item {
			margin-top: pxtovw414(25);

			dt {
				max-width: pxtovw414(120);
				padding-top: pxtovw414(12);
				font-size: pxtovw414(16);

				&:before {
					height: pxtovw414(2);
				}
			}

			dd {
				margin-top: pxtovw414(7);
				font-size: pxtovw414(11);
			}
		}
	}
}

.en {
	.type-info__item {
		dt {
			max-width: 100%;
		}
	}
}
</style>