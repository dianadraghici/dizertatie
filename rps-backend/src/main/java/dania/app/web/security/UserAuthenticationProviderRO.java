package dania.app.web.security;

import org.springframework.beans.factory.annotation.Value;

public class UserAuthenticationProviderRO extends UserAuthenticationProvider {

    private String ldapBaseRO;

    @Override
    public String getLdapBase() {
        return this.ldapBaseRO;
    }
}
