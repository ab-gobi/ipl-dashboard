package com.myapp.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import com.myapp.ipldashboard.model.Match;
import com.myapp.ipldashboard.model.Team;
import com.myapp.ipldashboard.repository.MatchRepository;
import com.myapp.ipldashboard.repository.TeamRepository;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class MatchController {

            TeamRepository teamRepository;
            MatchRepository matchRepository;

        public MatchController(TeamRepository teamRepository,MatchRepository matchRepository) {
                this.teamRepository = teamRepository;
                this.matchRepository = matchRepository;
            }

        @GetMapping("/team")
        public Iterable<Team> getAllTeam(){
            return this.teamRepository.findAll();
        }

        @GetMapping("/team/{teamName}")
        public Team getTeamInfo(@PathVariable String teamName){
            Team team = this.teamRepository.findByTeamName(teamName);
            Pageable pageable = PageRequest.of(0,4);
            team.setTeamMatches(this.matchRepository.getByTeam1OrTeam2OrderByDateDesc(teamName, teamName,pageable));
            return team;
        }

        @GetMapping("/team/{teamName}/matches")
        public List<Match> getMatchInfo(@PathVariable String teamName,@RequestParam int year){
            LocalDate startDate = LocalDate.of(year, 1, 1);
            LocalDate endDate = LocalDate.of(year+1, 1, 1);
            return this.matchRepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
        }

}
