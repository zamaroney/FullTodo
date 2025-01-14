package com.fullTodo.rest.webservices.restful_web_webservices.jwt;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JwtAuthenticationController {
    
    private final JwtTokenService tokenService;
    
    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationController(JwtTokenService tokenService, 
            AuthenticationManager authenticationManager) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JwtTokenResponse> generateToken(
            @RequestBody JwtTokenRequest jwtTokenRequest) {
        
        var authenticationToken = 
                new UsernamePasswordAuthenticationToken(
                        jwtTokenRequest.username(), 
                        jwtTokenRequest.password());
        
        var authentication = 
                authenticationManager.authenticate(authenticationToken);
        
        var token = tokenService.generateToken(authentication);
        
        return ResponseEntity.ok(new JwtTokenResponse(token));
    }

    // {
    //    "token": "eyJraWQiOiJjMGUwNmJlZi00YzRiLTQ2ZjktYTI2Zi0wNjExNzhkYmY3ZjIiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiemFtYXJvbmV5IiwiZXhwIjoxNzM2ODkzNDMyLCJpYXQiOjE3MzY4ODgwMzIsInNjb3BlIjoiUk9MRV9VU0VSIn0.R9I2MbD9q0pGDikiE7btOmsMO_e_hYFgQ91uwClG9hTpqUsv80-4lSm53imVBD-SKJaxpOVQaap4NmrBz_YRXDXJnZpc1h60zoL1kLgLu7l1Ic8nRH26O00PoCDOim69tbkKuDtL2SAHLaFfPWl0ORfcwp6Gc0Xh9rnwiQHDw5rdX3KKrpH17uDaPNPS2-NwjP3O2XK8xQk9gVxsA50QTkK8qHkuDi3aMqsrrDd2rxpvz9MeicehexdvDtODQpa2PL3V8_6cn-FPk9AoPEGeYWS_Cyhgdkg6ve6eDniAkZTEqb6BkWMcZAt5Yw3CM3h2oi1zYPTnTZvxjiuY2GKIEQ"
    //}
}
