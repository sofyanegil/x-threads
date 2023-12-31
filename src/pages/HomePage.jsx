import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPencil } from 'react-icons/fa6';
import { asyncHomePageData } from '../states/shared/action';
import { setCategoryActionCreator, clearCategoryActionCreator } from '../states/categories/action';
import LeaderboardsList from '../components/LeaderboardsList';
import ThreadsList from '../components/ThreadsList';
import CategoriesList from '../components/CategoriesList';

export default function HomePage() {
  const dispatch = useDispatch();
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);
  const leaderboards = useSelector((states) => states.leaderboards);
  const categories = useSelector((states) => states.categories);
  const authUser = useSelector((states) => states.authUser);

  useEffect(() => {
    dispatch(asyncHomePageData());
  }, [dispatch]);

  const onSelectedCategory = (category) => {
    dispatch(categories.selectedCategory === category ? clearCategoryActionCreator() : setCategoryActionCreator(category));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  const filteredThreadList = categories.selectedCategory ? threadList.filter((thread) => thread.category === categories.selectedCategory) : threadList;

  return (
    <section className="row mt-3">
      <div className="col-12 col-md-3 my-3">
        <CategoriesList categories={categories} selectedCategoryHandler={onSelectedCategory} />
        {authUser && (
          <div className="d-grid gap-2">
            <Link to="/thread/new" className="btn btn-dark mt-3 rounded-pill">
              <FaPencil />
              {' New Thread'}
            </Link>
          </div>
        )}
      </div>
      <div className="col-12 col-md-6">
        <ThreadsList threads={filteredThreadList} />
      </div>
      <div className="col-12 col-md-3 my-3">
        <LeaderboardsList leaderboards={leaderboards} />
      </div>
    </section>
  );
}
