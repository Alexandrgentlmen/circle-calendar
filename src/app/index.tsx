import { Route, Routes } from 'react-router-dom';
import Main from './main';
import PageNotFound from '~/components/page-not-found';
import { AppRoute } from '~/api/const';

function App() {
  return (
    <>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
