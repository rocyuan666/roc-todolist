import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import classNames from "classnames";

import { actionChangeThemeIndex } from "../../../../store/actions";

import { TypeML } from "../../../../store/reducer";

import { StyledSetupWrap, StyledThemeContWrap } from "./styled"

interface IProps{
	themeColor: string[],
	themeColorCurrentIndex: number,
	changeThemeColorCurrentIndex: (index:number) => void,
}

class RocSetup extends PureComponent<IProps> {
	render() {
		return (
			<StyledSetupWrap>
				<div className="title-box">
					<h2>设置</h2>
				</div>
				<StyledThemeContWrap>
					<div className="theme-box">
						<p className="name">设置主题色：</p>
						<div className="color-box">
						{
							this.props.themeColor.map((item: string, index: number) => {
								return (
									<span
										key={index}
										onClick={() => { this.props.changeThemeColorCurrentIndex(index) }}
										className={classNames({
											'active': index === this.props.themeColorCurrentIndex
										})}
										style={{ backgroundColor: item }}
									>
										<em></em>
									</span>
								)
							})
						}
						</div>
					</div>
				</StyledThemeContWrap>
			</StyledSetupWrap>
		)
	}
}

const mapStateToProps = (state: TypeML) => {
	return {
		themeColor: state.themeColor,
		themeColorCurrentIndex: state.themeColorCurrentIndex
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		changeThemeColorCurrentIndex(index: number) {
			dispatch(actionChangeThemeIndex(index))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RocSetup)