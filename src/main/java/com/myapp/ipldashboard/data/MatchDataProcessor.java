package com.myapp.ipldashboard.data;

import java.time.LocalDate;

import com.myapp.ipldashboard.model.Match;

import org.springframework.batch.item.ItemProcessor;


    public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {
        // private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);
      
        @Override
        public Match process(final MatchInput matchInput) throws Exception {
            Match match = new Match();
            match.setId(Long.parseLong(matchInput.getId()));
            match.setCity(matchInput.getCity());
            match.setDate(LocalDate.parse(matchInput.getDate()));
            match.setVenue(matchInput.getVenue());
            match.setPlayerOfMatch(matchInput.getPlayer_of_match());
            match.setMatchWinner(matchInput.getWinner());
            // String firstInningsTeam;
            // String secondInningsTeam;

            // if("bat".equals(matchInput.getToss_decision())){
            //     firstInningsTeam = matchInput.getToss_winner();
            //     secondInningsTeam = 
            // }
            // else{
            //     secondInningsTeam = matchInput.getToss_winner();
            // }

            match.setTeam1(matchInput.getTeam1());
            match.setTeam2(matchInput.getTeam2());
            match.setTossWinner(matchInput.getToss_winner());
            match.setTossDecision(matchInput.getToss_decision());
            match.setResult(matchInput.getResult());
            match.setResultMargin(matchInput.getResult_margin());
            match.setUmpire1(matchInput.getUmpire1());
            match.setUmpire2(matchInput.getUmpire2());
            return match;
        }

      
    
}
