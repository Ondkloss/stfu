import naruto from '../assets/naruto.gif';

export default function ({ loading }) {
  return <div class="full loading">
    <img src={naruto} alt=""/>
    <h2>{loading}...</h2>
  </div>;
}
