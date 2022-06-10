import React from 'react'
import img_ from '../assets/images/tuyendung.jpg'
export const Recruit = () => {
  return (
    <div className='recruit'>
        <div className="recruit__item">
            <div className="recruit__item__title">TUYỂN DỤNG</div>
        </div>
        <div className="recruit__item">
            <p>Bạn yêu thích thời trang? Bạn muốn thử sức với vị trí nhân viên kinh doanh Online?</p>
            <p>Hãy Apply ngay hôm nay để được trở thành thành viên của DUMA Team</p>
            <p>Chúng tôi là một Team trẻ-năng động-đầy nhiệt huyết, nên chắc chắn bạn cũng phải có điều đó khi gia nhập Team chúng tôi!</p>
            <p>Môi trường làm việc thoải mái - Hoà đồng - Nhiều khả năng gia tăng thu nhập là những điều mà BYCOTTON đảm bảo cùng bạn.</p>
            <p>Hãy xem qua mô tả công việc bạn nhé:</p>
            <p>Yêu cầu: - Làm Full Ca từ 8h sáng - 18h tối. - Không yêu cầu giới tính.</p>
            <p>- Ngoại hình tương đối, tác phong gọn gàng.</p>
            <p>- Biết sử dụng máy vi tính, điện thoại trả lời tin nhắn khách hàng. Công việc chung: - Tiếp đón khách hàng tại shop.</p>
            <p>- Duy trì không gian cửa hàng tươm tất, sạch sẽ, chuyên nghiệp</p>
            <p>- Trả lời và chốt đơn hàng online.</p>
            <p>- Tư vấn chương trình khuyến mãi, các ưu đãi hội viên.</p>
            <p>- Lương thưởng: - Lương cơ bản + Commission trên món hàng chốt!</p>
            <p>- Thưởng Lễ- Tết. - Du lịch dã ngoại 1 lần/năm. - Party cùng hội nhóm.</p>
        </div>
        <div className="recruit__item">
          Nộp hồ sơ qua email:
          <a href="mailto: 18520451@gm.uit.edu.vn">18520451@gm.uit.edu.vn</a>
        </div>
        <div className="recruit__item">
            <img src={img_} />
        </div>
    </div>
  )
}
export default Recruit