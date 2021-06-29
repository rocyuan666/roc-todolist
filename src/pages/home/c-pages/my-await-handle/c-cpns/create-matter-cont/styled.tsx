import styled from "styled-components";

export const StyledCreateMatterContWrap = styled.div`
	.inpt-box{
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		.name{
			width: 90px;
			font-size: 14px;
		}
		.value{
			flex: 1;
			height: 32px;
			line-height: 32px;
			outline: none;
			border-radius: 10px;
			border: 1px solid #ccc;
			padding: 0 10px;
		}
		/* 事项优先级 */
		.value-box{
			display: flex;
			span{
				cursor: pointer;
				position: relative;
				width: 18px;
				height: 18px;
				margin: 0 10px;
				border-radius: 50%;
				transition: all .3s;
				em{
					position: absolute;
					top: 50%;
					left: 50%;
					margin-left: -4px;
					margin-top: -4px;
					width: 8px;
					height: 8px;
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
				border: 1px solid #f00;
				background-color: #f00;
				&:hover{
					color: #f00;
					border: 1px solid #f00;
					background-color: #fff;
				}
			}
		}
	}
`