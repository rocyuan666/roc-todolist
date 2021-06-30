import styled from "styled-components";

export const StyledSetupWrap = styled.div`
	/* 标题 */
	.title-box{
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		h2{
			margin-bottom: 0;
			font-weight: bolder;
		}
		.btn-create{
			padding: 0 50px;
			height: 30px;
			font-size: 14px;
			line-height: 30px;
			border-radius: 15px;
			cursor: pointer;
			color: #fff;
			background-color: #f00;
			border: 1px solid #f00;
			transition: all .3s;
			&:hover{
				color: #f00;
				background-color: #fff;
			}
		}
	}
`
export const StyledThemeContWrap = styled.div`
	background-color: #fff;
	border-radius: 10px;
	min-height: 300px;
	padding: 30px 20px;
	.theme-box{
		display: flex;
		align-items: center;
		.name{
			margin-right: 10px;
			margin-bottom: 0;
			font-size: 16px;
		}
		.color-box{
			display: flex;
			span{
				cursor: pointer;
				position: relative;
				width: 22px;
				height: 22px;
				margin: 0 10px;
				border-radius: 50%;
				transition: all .3s;
				em{
					position: absolute;
					top: 50%;
					left: 50%;
					margin-left: -5px;
					margin-top: -5px;
					width: 10px;
					height: 10px;
					background-color: #fff;
					border-radius: 50%;
					transform: scale(0);
					transition: all .3s;
				}
				&:hover{
					em{
						transform: scale(1);
					}
				}
				&.active{
					em{
						transform: scale(1);
					}
				}
			}
		}
	}
`