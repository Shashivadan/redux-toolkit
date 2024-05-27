import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUsers } from "../store/actions/usersAction";

export default function Users() {
  const { users } = useSelector((state: any) => state.usersResducer);

  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(asyncGetUsers());
  }, []);

  return (
    <div>
      <div>
        {users && (
          <>
            <ul>
              {users.map((item: any, index: any) => (
                <li key={index}> {item.username} </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
