import styled from "styled-components";

export const StyledAboutWrap = styled.div`
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
	.cont-box{
		border-radius: 10px;
		background-color: #fff;
		min-height: 300px;
		padding: 30px 20px;
		text-align: center;
	}
`