import styled from "styled-components";

export const StyledMyAwaitHandleWrap = styled.div`
	padding-bottom: 20px;
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
			background-color: ${(props: {themeColor: string}) => props.themeColor};
			border: 1px solid ${(props: {themeColor: string}) => props.themeColor};
			transition: all .3s;
			&:hover{
				color: ${(props: {themeColor: string}) => props.themeColor};
				background-color: #fff;
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
	transition: all .3s;
	/* 每项事项 */
	.matter-item{
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 10px;
		min-height: 80px;
		transition: all .3s;
		&.active{
			background-color: #fff;	
		}
		&:hover{
			background-color: #eee;
			.right-box{
				opacity: 1;
			}
		}
		.left-box{
			display: flex;
			align-items: center;
			flex: 1;
			.line{
				width: 6px;
				height: 30px;
				overflow: hidden;
				border-radius: 3px;
				text-indent: -9999em;
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
					transition: all .1s;
					.icon-yes{
						color: #fff;
						padding: 8px;
						font-size: 18px;
						background-color: ${(props: {themeColor: string}) => props.themeColor};
						transform: translateY(-40px);
						opacity: 0;
						transition: all .3s;
					}
					&:hover{
						border: 1px solid ${(props: {themeColor: string}) => props.themeColor};
						.icon-yes{
							opacity: 1;
							transform: translateY(0);
						}
					}
					&.active{
						border: 1px solid ${(props: {themeColor: string}) => props.themeColor};
						.icon-yes{
							opacity: 1;
							transform: translateY(0);
						}
						&:hover{
							.icon-yes{
								opacity: 1;
								transform: translateY(-40px);
							}
						}
					}
				}
			}
			.text{
				flex: 1;
				margin-bottom: 0;
				word-break: break-all;
			}
		}
		.right-box{
			display: flex;
			justify-content: center;
			width: 125px;
			opacity: 0;
			transition: all .3s;
			.icon-edit, .icon-delete{
				font-size: 20px;
				color: #666;
				margin: 0 20px;
				cursor: pointer;
			}
		}
	}
`

// 删除弹窗
export const StyledDelPopWrap = styled.div`
	.del-pop-cont{
		display: flex;
		align-items: center;
		.icon-del{
			font-size: 26px;
			color: #fa8c16;
			margin-right: 10px;
		}
		.text{
			font-size: 16px;
			margin-bottom: 0;
		}
	}
	.btn-box{
		display: flex;
		justify-content: flex-end;
		margin-top: 30px;
		span{
			display: block;
			height: 28px;
			line-height: 28px;
			border-radius: 14px;
			padding: 0 28px;
			cursor: pointer;
			transition: all .3s;
			margin: 0 10px;
			&.cancel{
				color: #aaa;
				border: 1px solid #aaa;
				background-color: #fff;
				&:hover{
					color: #fff;
					border: 1px solid #aaa;
					background-color: #aaa;
				}
			}
			&.ok{
				color: #fff;
				border: 1px solid ${(props: {themeColor: string}) => props.themeColor};
				background-color: ${(props: {themeColor: string}) => props.themeColor};
				&:hover{
					color: ${(props: {themeColor: string}) => props.themeColor};
					border: 1px solid ${(props: {themeColor: string}) => props.themeColor};
					background-color: #fff;
				}
			}
		}
	}
`