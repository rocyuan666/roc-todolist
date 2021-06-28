import styled from "styled-components";

export const StyledMyAwaitHandleWrap = styled.div`
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
			transition: all .3s;
			&:hover{
				background-color: #d00;
			}
		}
	}
`
/* 事项 */
export const StyledMatterWrap = styled.div`
	background-color: #fff;
	border-radius: 10px;
	overflow: hidden;
	margin-top: 10px;
	/* 每项事项 */
	.matter-item{
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		transition: all .3s;
		&:hover{
			background-color: #eee;
			.right-box{
				opacity: 1;
			}
		}
		.left-box{
			display: flex;
			align-items: center;
			min-height: 80px;
			.line{
				width: 6px;
				height: 30px;
				overflow: hidden;
				border-radius: 3px;
				text-indent: -9999em;
				background-color: #f00;
				margin-right: 20px;
			}
			.option{
				.radio-box{
					display: flex;
					align-items: center;
					justify-content: center;
					width: 30px;
					height: 30px;
					cursor: pointer;
					border-radius: 50%;
					border: 1px solid #ddd;
					overflow: hidden;
					margin-right: 20px;
					transition: all .3s;
					.icon-yes{
						color: #fff;
						padding: 8px;
						font-size: 18px;
						background-color: #f00;
						transform: translateY(-40px);
						transition: all .3s;
					}
					&:hover{
						border: 1px solid #f00;
					}
					&.active{
						.icon-yes{
						transform: translateY(0);
						}
					}
				}
			}
			.text{
				margin-bottom: 0;
				word-break: break-all;
			}
		}
		.right-box{
			opacity: 0;
			transition: all .3s;
			.icon-edit, .icon-delete{
				font-size: 20px;
				color: #000;
				margin: 0 20px;
				cursor: pointer;
			}
		}
	}
`