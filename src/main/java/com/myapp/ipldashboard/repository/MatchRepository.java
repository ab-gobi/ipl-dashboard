package com.myapp.ipldashboard.repository;

import java.util.List;

import com.myapp.ipldashboard.model.Match;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

public interface MatchRepository extends CrudRepository<Match,Long> {
    
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1,String teamName2,Pageable pageable);

}
