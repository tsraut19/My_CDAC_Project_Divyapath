package com.divyapath.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query; 
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.divyapath.model.User;
 
@Transactional // indicates that this interface defines a transactional boundary for the database operations it contains.
@Repository
public interface UserDao extends JpaRepository<User, String> {
	 
	 
//	old login
	@Query(value = "SELECT * FROM user WHERE  email =:email and password=:password", nativeQuery = true)
	List<User> findAllActiveUsersNative(@Param(value = "email") String email, @Param(value = "password") String password);
	 
//	@Query(value = "SELECT * FROM user WHERE  email =:email and password=:password and authenticate!=0", nativeQuery = true)
//	List<User> findAllActiveUsersNative(@Param(value = "email") String email, @Param(value = "password") String password);
 
	//--for super admin appproval-----
	@Query(value = "select * from user  where authenticate = '0' ", nativeQuery = true)
	public List<User> findByAuthenticate();
	 
	@Modifying // indicates that this method modifies the data in the database. 
	@Query(value = "update user set authenticate=1 where email =:email", nativeQuery = true)
	public void authenticateAdmin(@Param(value = "email") String email);
	
	//--for super admin permissions revoke-----
	@Query(value = "select * from user  where authenticate = '1' ", nativeQuery = true)
	public List<User> findAdmins();

	@Modifying // indicates that this method modifies the data in the database. 
	@Query(value = "update user set authenticate=0 where email =:email", nativeQuery = true)
	public void removeAdmin(@Param(value = "email") String email);
		
	//---------find user by email id---------
	@Query(value="SELECT * FROM user WHERE  email =:email", nativeQuery = true)
	public User findbyEmailId(@Param(value = "email") String email);
	
	//---------find user by uid---------
	@Query(value="SELECT * FROM user WHERE  uid =:uid", nativeQuery = true)
	public User findbyUid(@Param(value = "uid") Integer uid);

}
