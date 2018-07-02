import React, { Component } from 'react';
import user from './user.jpg'
import pictest from './pictest.jpg'
import FontAwesomeIcon from 'react-fontawesome'
import './style/main.scss'
import newsLogo from './newsLogo.png';

class Home extends Component {
	componentDidMount() {
		fetch('https://iapi.bot.or.th/Stat/Stat-ReferenceRate/DAILY_REF_RATE_V1/?start_period=2018-06-26&end_period=2018-06-26&currency=JPY', {
			method: 'GET',
			headers: {
				'api-key':'U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm'
			}
		})
			.then(response => response.json())
			.then(json => console.log(json))

	}
	render() {
		return (
			<div className='App'>
				<div className='mainContainner'>
					<div className='containerHome'>
						<div className='containerHomeHeader'>

							{/* header */}
							<div className='homeHeaderBox'>
								<input className='search' type='text' placeholder='ค้นหา' />
							</div>
							<div className='homeHeaderBox --itemCenter'>
								<img src={newsLogo} />
							</div>
							<div className='homeHeaderBox --itemLeft'>
								<div>
									<a>
										<FontAwesomeIcon className='super-crazy-colors' name='sign-in' />
									</a>
									<a>
										<FontAwesomeIcon className='super-crazy-colors' name='home' />
									</a>
								</div>
							</div>
						</div>

						{/* menu */}
						<div className='containerMenu'>
							<h1 className='menu'>ข่าว</h1>
							<span className='menu'>ทั่วไป</span>
							<span className='menu'>กีฬา</span>
							<span className='menu'>บันเทิง</span>
							<span className='menu'>สังคม</span>
							<span className='menu'>เศรษฐกิจ</span>
							<span className='menu'>ต่างประเทศ</span>
						</div>

						{/* hightlight news */}
						<div className='containerNews'>
							<div className='bigHilightNews'>
								<div className='imageNews'>
									<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
								</div>
								<div className='contentNews'>
									เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
								</div>
							</div>
							<div className='smallHightlightNews'>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
										</div>
								</div>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
										</div>
								</div>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
										</div>
								</div>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
									</div>
								</div>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
										</div>
								</div>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
										</div>
								</div>
							</div>
						</div>

						{/* other news */}
						<h1>ข่าว</h1>
						<div className='containerNews'>
							<div className='otherNews'>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
										</div>
								</div>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
										</div>
								</div>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
										</div>
								</div>
								<div className='news'>
									<div className='imgNews'>
										<img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
									</div>
									<div className='contentNews'>
										เกาะติดสถานการณ์จากถ้ำหลวง เจ้าหน้าที่ยังเร่งเดินเท้าเข้าสูบน้ำ หวังลดระดับน้ำภายในถ้ำให้ได้มากที่สุด หน่วยซีลแบ่งการทำงานเป็น 3 ชุด ยังค้นหาไม่หยุด
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='footer'>footer
					</div>
				</div>
			</div>
		)
	}
}

export default Home;