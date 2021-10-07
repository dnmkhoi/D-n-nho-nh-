import React, { Component } from 'react';

class CustomFooter extends Component {
    render() {
        return (
<section class="container-fluid bg-xanh pad-TB30">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="text-ft">
               <p class="mb-0">Cơ quan vận hành</p>
               <h4>Trung tâm giải quyết Thủ tục hành chính Tỉnh Cà Mau</h4>
               <ul class="list-unstyled menu-f">
                  <li><a class="text-xanhnhat" href=""><i class="far fa-envelope mr-5"></i>dnmkhoi@cusc.ctu.edu.vn</a></li>
                  <li><a class="text-xanhnhat" href=""><i class="fas fa-phone-alt mr-5"></i>070.657.8886</a></li>
                  <li><i class="fas fa-map-marker-alt mr-5"></i>Số 1 đường Lý Tự Trọng, An Phú, Ninh Kiều, Cần Thơ</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>        );
    }
}

export default CustomFooter;