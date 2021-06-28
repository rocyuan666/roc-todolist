import styled from "styled-components"

// 最外层
export const StyledSiderMenuWrap = styled.div`
	box-sizing: border-box;
	position: fixed;
	left: 0;
	top: 0;
	width: 260px;
	height: 100%;
	background-color: #fff;
	padding: 50px 30px;
`
// 头部信息样式
export const StyledHeaderInfoWrap = styled.div`
	margin-bottom: 30px;
	.logo{
		font-size: 20px;
		margin-bottom: 50px;
	}
	.user-info-box{
		display: flex;
		align-items: center;
		.img-logo{
			display: block;
			width: 50px;
			height: 50px;
			margin-right: 10px;
			border-radius: 50%;
		}
		.user-name{
			font-size: 18px;
			margin-bottom: 0;
		}
	}
`
// 按钮nav样式
export const StyledNavWrap = styled.div`
	overflow: hidden;
	.btn-nav{
		display: flex;
		align-items: center;
		height: 50px;
		line-height: 50px;
		padding-left: 20px ;
		margin: 20px 0;
		background: #fff;
		border-radius: 10px;
		color: #000;
		transition: all .3s;
		.btn-icon{
			font-size: 20px;
			margin-right: 10px;
		}
		&:hover{
			color: #f00;
			background: #F1F2F6;
		}
		&.active{
			color: #f00;
			background: #F1F2F6;
		}
		&:active{
			transform: scale(.92);
		}
	}
`