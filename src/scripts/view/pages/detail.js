import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../template/template-creator';
import RestoSource from '../../../public/data/resto-source';

const Detail = {
  async render() {
    return `
        <div class="detail-content">
          <div id="resto-detail" class="resto-detail">
          </div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseAcvtiveUrlWithoutCombiner();
    const resto = await RestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');

    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
  },
};
export default Detail;
