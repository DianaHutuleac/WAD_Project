package ro.f1.backend.security;

import org.apache.catalina.Context;
import org.apache.catalina.connector.Connector;
import org.apache.coyote.http11.Http11NioProtocol;
import org.apache.tomcat.util.descriptor.web.SecurityCollection;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.hibernate.boot.model.relational.ColumnOrderingStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import javax.sql.DataSource;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import ro.f1.backend.Services.CustomLogoutHandler;
import ro.f1.backend.auth.AppUserService;
import jakarta.servlet.Filter;

import static ro.f1.backend.Models.AppUserRole.*;

@Configuration
@ComponentScan(basePackages = {"ro.f1"})
@EnableWebSecurity
public class WebSecurityConfig implements WebMvcConfigurer  {

    private final PasswordEncoder passwordEncoder;
    private final AppUserService appUserService;

    @Autowired
    RestAuthEntryPoint restAuthEntryPoint;

    @Autowired
    DataSource dataSource;

    @Autowired
    private CustomLogoutHandler logoutHandler;


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PATCH", "PUT", "OPTIONS", "DELETE")
                .allowCredentials(true);
    }



    @Autowired
    public WebSecurityConfig(PasswordEncoder passwordEncoder, AppUserService appUserService) {
        this.passwordEncoder = passwordEncoder;
        this.appUserService = appUserService;
    }

    @Bean
    public WebSecurityCustomizer registry() throws Exception {
        return (web) -> web.ignoring().requestMatchers("/docs/**", "/actuator/**", "/swagger-ui.html", "/webjars/**");
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration auth) throws Exception {
        return auth.getAuthenticationManager();
    }



    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.
                csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/","/static/**", "index*", "/css/*", "/js/*","/media/*","*.ico","*.png").permitAll()
                .requestMatchers("/api/register").permitAll()
                .requestMatchers("/api/auth").permitAll()
                .requestMatchers("/api/persist/**").permitAll()
                .requestMatchers("/api/v1/**").permitAll()
                .requestMatchers("/admin/api/**").permitAll()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(restAuthEntryPoint)
                .and()
                .formLogin()
                .loginPage("http://localhost:3000/login").permitAll().loginProcessingUrl("/api/login").usernameParameter("username").passwordParameter("password")
                .permitAll()
                .and()
                .logout()
                .logoutUrl("/api/logout")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .clearAuthentication(true)
                .addLogoutHandler(logoutHandler)
                .logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK));


        return http.build();
    }




    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(appUserService);
        return provider;
    }
}