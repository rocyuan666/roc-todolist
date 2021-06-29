import styled from "styled-components";

interface IProps{
	height: number
}

export const StyledNonePageWrap = styled.div`
	height: ${(props: IProps) => props.height + "px"};
	display: flex;
	justify-content: center;
	align-items: center;
	.icon-none{
		font-size: 88px;
		color: #f00;
	}
`